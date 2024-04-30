import { SearchDataOptions } from "@/lib/types";
import { Chevron } from "@/public/assets/icons";
import clsx from "clsx";
import Link from "next/link";

const Pagination = ({
  options,
  totalPages,
}: {
  options: SearchDataOptions;
  totalPages: number;
}) => {
  const { page, author, title } = options;
  return (
    <div className="flex gap-[8px]">
      <Link
        href={{
          pathname: "/",
          query: {
            page: page > 1 ? page - 1 : 1,
            author,
            title,
          },
        }}
        className={clsx(
          "border border-componentStroke rounded-full bg-transparent size-[40px] flex-center",
          page <= 1 && "pointer-events-none"
        )}
      >
        <Chevron
          className={clsx(
            "stroke-textPrimary size-[20px] rotate-[180deg]",
            page <= 1 && "stroke-componentStroke"
          )}
        />
      </Link>
      <Link
        href={{
          pathname: "/",
          query: {
            page: page + 1,
            author,
            title,
          },
        }}
        className={clsx(
          "border border-componentStroke rounded-full bg-transparent size-[40px] flex-center",
          page === totalPages && "pointer-events-none"
        )}
      >
        <Chevron
          className={clsx(
            "stroke-textPrimary size-[20px]",
            page === totalPages && "stroke-componentStroke"
          )}
        />
      </Link>
    </div>
  );
};

export default Pagination;
