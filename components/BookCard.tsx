import { Book } from "@/lib/types";
import Image from "next/image";

type BookCardProps = {
  book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    /*   <Dialog>
      <DialogTrigger asChild> */
    <article className="flex flex-col gap-[8px] h-full">
      <div className="h-[84%]">
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
    /*  </DialogTrigger> */
    /*       <DialogContent className="w-full md:w-[500px] py-[40px] md:py-[50px] bg-bgPrimary border-componentStroke rounded-[12px] flex flex-col ">
        <div className="max-h-[233px] max-w-[153px] mb-[16px]">
          <Image
            src={book.imageUrl}
            alt="Book"
            width={153}
            height={233}
            className="rounded-[8px]"
          />
        </div>
        <h2 className="font-[700] text-[14px] leading-[129%] tracking-[-0.02em] truncate">
          {book.title}
        </h2>
        <h3 className="text-[10px] text-textSecondary leading-[120%] tracking-[-0.02em]">
          {book.author}
        </h3>
        <p>{book.totalPages}</p>
        <Button>Add to library</Button>
      </DialogContent>
    </Dialog> */
  );
};

export default BookCard;
