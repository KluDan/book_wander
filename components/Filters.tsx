"use client";

import Button from "./CustomButton";
import Input from "./Input";

const Filters = () => {
  return (
    <div className="flex-grow">
      <span className="block text-[10px] leading-[120%] ml-[14px] mb-[8px]">
        Filters:
      </span>
      <form className="flex flex-col gap-[8px] w-full md:min-w-[295px]">
        <Input label="The author" name="author" type="text" />
        <Input label="Book title" name="title" type="text" />
        <div className="mt-[12px]">
          <Button>To apply</Button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
