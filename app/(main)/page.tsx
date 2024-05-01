import Dashboard from "@/components/Dashboard";

import BooksList from "@/components/BooksList";
import { getRecommendedBooks } from "../actions";
import Pagination from "@/components/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 10;

  const author =
    typeof searchParams.author === "string" ? searchParams.author : undefined;
  const title =
    typeof searchParams.title === "string" ? searchParams.title : undefined;
  const options = { page, limit, author, title };

  const data = await getRecommendedBooks(options);

  const recommendedBooks = data?.results;
  const totalPages = data?.totalPages || 1;

  return (
    <div className="flex flex-col xl:flex-row gap-[16px]">
      <Dashboard />
      <div className="flex-grow mt-[10px] xl:mt-0 py-[40px] px-[20px] md:px-[40px] rounded-[30px] bg-bgPrimary h-max">
        <div className="flex justify-between items-center  mb-[34px] md:mb-[24px]">
          <h1 className="page_title">Recommended</h1>
          <Pagination options={options} totalPages={totalPages} />
        </div>
        <BooksList books={recommendedBooks} page="home" />
      </div>
    </div>
  );
}
