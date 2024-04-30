"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import Button from "./CustomButton";
import Input from "./Input";

const Filters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [author, setAuthor] = useState(searchParams.get("author") || "");

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const author = formData.get("author") as string | null;
      const title = formData.get("title") as string | null;

      const params = new URLSearchParams(searchParams);
      if (author) {
        params.set("author", author);
      } else {
        params.delete("author");
      }
      if (title) {
        params.set("title", title);
      } else {
        params.delete("title");
      }

      replace(`${pathname}?${params.toString()}`);
    } catch (error) {
      console.error("Error handling form submission:", error);
    }
  };

  return (
    <div className="flex-grow">
      <span className="block text-[10px] leading-[120%] ml-[14px] mb-[8px]">
        Filters:
      </span>
      <form
        className="flex flex-col gap-[8px] w-full md:min-w-[295px]"
        onSubmit={handleSubmitForm}
      >
        <Input
          label="The author"
          name="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Input label="Book title" name="title" type="text" />
        <div className="mt-[12px]">
          <Button>To apply</Button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
