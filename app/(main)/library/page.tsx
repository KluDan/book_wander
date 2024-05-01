import { getOwnBooks } from "@/app/actions";
import BooksList from "@/components/BooksList";
import BookStatusSelect from "@/components/BookStatusSelect";
import Dashboard from "@/components/Dashboard";
import Image from "next/image";
import books from "../../../public/assets/images/books.png";

export default async function LibraryPage() {
  const ownBooks = await getOwnBooks();
  console.log("own", ownBooks);
  return (
    <section className="flex flex-col xl:flex-row gap-[16px]">
      <Dashboard />
      <div className="content_block py-[40px] px-[20px] md:px-[40px] flex flex-col w-full">
        <div className="flex items-center justify-between ">
          <h1 className="page_title">My library</h1>
          <BookStatusSelect />
        </div>
        {ownBooks && ownBooks.length > 0 ? (
          <div className="mt-[28px]">
            <BooksList books={ownBooks} page="library" />
          </div>
        ) : (
          <div className="self-center flex-center flex-col max-w-[197px] mt-[70px]">
            <div className="bg-bgSecondary rounded-full size-[100px] flex-center mb-[10px]">
              <Image src={books} width={50} height={50} alt="Books" />
            </div>
            <p className="text-[14px] leading-[129%] text-center">
              To start training, add{" "}
              <span className="text-textSecondary">some of your books</span> or
              from the recommended ones
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
