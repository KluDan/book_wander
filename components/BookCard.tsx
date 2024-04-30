import { Book } from "@/lib/types";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Button from "./CustomButton";

type BookCardProps = {
  book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <article className="flex flex-col justify-between h-full xl:h-[248px] cursor-pointer">
          <div className="h-[84%] hover:scale-[102%] transition">
            <Image
              src={book.imageUrl}
              alt="Book"
              width={137}
              height={208}
              className="rounded-[8px] w-full h-full"
            />
          </div>

          <h2 className="font-[700] text-[14px] leading-[129%] tracking-[-0.02em] truncate">
            {book.title}
          </h2>
          <h3 className="text-[10px] text-textSecondary leading-[120%] tracking-[-0.02em]">
            {book.author}
          </h3>
        </article>
      </DialogTrigger>
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
        <Button>Add to library</Button>
      </DialogContent>
    </Dialog>
  );
};

export default BookCard;
