import Dashboard from "@/components/Dashboard";
import { cookies } from "next/headers";
import BooksList from "@/components/BooksList";
import { getRecommendedBooks } from "../actions";

export default async function Home() {
  const data = await getRecommendedBooks();
  const recommendedBooks = data?.results;

  return (
    <div className="flex flex-col xl:flex-row gap-[16px]">
      <Dashboard />
      <div className="flex-grow mt-[10px] xl:mt-0 py-[40px] px-[20px] md:px-[40px] rounded-[30px] bg-bgPrimary h-max">
        <h2 className="mb-[34px] font-[700] text-[40px] md:text-[28px] md:leading-[114%] tracking-[-0.02em]">
          Recommended
        </h2>
        <BooksList recommendedBooks={recommendedBooks} />
      </div>
    </div>
  );
}
