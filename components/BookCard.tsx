"use client";
import { Book } from "@/lib/types";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Button from "./CustomButton";
import { addBookById, deleteOwnBook, getOwnBooks } from "@/app/actions";
import { Trash } from "@/public/assets/icons";
import Link from "next/link";

type BookCardProps = {
  book: Book;
  page: "home" | "library";
};

const BookCard: React.FC<BookCardProps> = ({ book, page }) => {
  const handleAddBtnClick = async () => {
    const ownBooks = await getOwnBooks();
    console.log(ownBooks);
    const isBookAlreadyAdded = ownBooks.some(
      (ownBook: Book) => ownBook.title === book.title
    );
    if (!isBookAlreadyAdded) {
      await addBookById(book._id);
      console.log("Book added to library successfully");
    } else {
      console.log("Book is already in library");
    }
  };

  const handleDeleteBtnClick = async () => {
    console.log("book", book);
    try {
      await deleteOwnBook(book._id);
      console.log("Book deleted from library successfully");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <Dialog>
      <article className="flex flex-col justify-between h-full xl:h-[248px] cursor-pointer">
        <DialogTrigger asChild>
          <div className="h-[84%] hover:scale-[102%] transition">
            <Image
              src={book.imageUrl}
              alt="Book"
              width={137}
              height={208}
              className="rounded-[8px] w-full h-full"
            />
          </div>
        </DialogTrigger>

        <div
          className={`${
            page === "library" ? "flex justify-between w-full" : ""
          }`}
        >
          <div className={`${page === "library" ? "max-w-[89px]" : ""}`}>
            <h2 className="font-[700] text-[14px] leading-[129%] tracking-[-0.02em] truncate">
              {book.title}
            </h2>
            <h3 className="text-[10px] text-textSecondary leading-[120%] tracking-[-0.02em]">
              {book.author}
            </h3>
          </div>
          {page === "library" && (
            <div
              className="size-[28px] rounded-full border border-redStroke bg-redFill flex-center"
              onClick={handleDeleteBtnClick}
            >
              <Trash />
            </div>
          )}
        </div>
      </article>

      <DialogContent className="w-[335px] flex-center gap-0 flex-col md:w-[500px] py-[40px] md:py-[50px] bg-bgPrimary border-componentStroke rounded-[12px]">
        <div className="mb-[16px]">
          <Image
            src={book.imageUrl}
            alt="Book"
            width={153}
            height={233}
            className="rounded-[8px] h-[233px]"
          />
        </div>
        <h2 className="font-[700] text-[16px] leading-[100%] tracking-[-0.02em] max-w-[200px] text-center mb-[2px] xl:text-[18px] xl:max-w-[300px]">
          {book.title}
        </h2>
        <h3 className="text-[12px] text-textSecondary leading-[117%] tracking-[-0.02em] mb-[4px] xl:text-[16px]">
          {book.author}
        </h3>
        <span className="text-[10px] leading-[120%] tracking-[-0.02em] text-center mb-[20px] md:mb-[32px] xl:text-[14px]">
          {book.totalPages} pages
        </span>
        {page === "library" ? (
          <Link href="/reading">
            <Button onClick={handleAddBtnClick}>Start reading</Button>
          </Link>
        ) : (
          <Button onClick={handleAddBtnClick}>Add to library</Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookCard;
