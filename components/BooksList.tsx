import { Book } from "@/lib/types";
import { Suspense } from "react";
import BooksCard from "./BookCard";
import BookSkeleton from "./BookSkeleton";

type RecommendedBooksProps = {
  recommendedBooks: Book[];
};

const BooksList: React.FC<RecommendedBooksProps> = ({ recommendedBooks }) => {
  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-[21px] md:gap-x-[25px] md:gap-y-[27px] xl:gap-x-[20px]">
        {recommendedBooks?.map((book) => (
          <li key={book._id.toString()}>
            <Suspense fallback={<BookSkeleton />}>
              <BooksCard book={book} />
            </Suspense>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BooksList;
