import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const BookStatusSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] p-[14px] bg-transparent border border-componentStroke rounded-[12px]">
        <SelectValue placeholder="All books" className=" " />
      </SelectTrigger>
      <SelectContent className="bg-bgSecondary rounded-[12px] outline-none ring-0 border-0 p-[14px]">
        <SelectItem value="unread">Unread</SelectItem>
        <SelectItem value="progress">In progress</SelectItem>
        <SelectItem value="done">Done</SelectItem>
        <SelectItem value="all">All books</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default BookStatusSelect;
/* text-[12px] leading-[133%] text-textPrimary */
