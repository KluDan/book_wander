import { Logo } from "@/public/assets/icons";
import Link from "next/link";

interface AuthBlockProps {
  children?: React.ReactNode;
}

const AuthBlock = ({ children }: AuthBlockProps) => {
  return (
    <div className="content_block overflow-y-auto overflow-hidden p-[20px] md:py-[40px] md:px-[64px]  md:h-[calc(100lvh-64px)] mb-[10px] md:mb-0 flex flex-col md:justify-center relative">
      <Link
        href="/"
        className="flex gap-[4px] mb-[40px] md:absolute top-[40px] left-[64px]"
      >
        <Logo className="w-[42px] h-[17px]" />
        <span className="hidden md:block uppercase text-[18px] tracking-[0.02em] font-[700]">
          read journey
        </span>
      </Link>
      <div className="max-w-[472px] xl:min-w-[472px] xl:w-full xl:mt-[107px]"></div>
      <h1 className="font-[700] text-[32px] md:text-[64px] text-textPrimary leading-[100%] tracking-[0.02em] mb-[20px] max-w-[444px] md:mb-[40px]">
        Expand your mind, reading{" "}
        <span className="text-textSecondary">a book</span>
      </h1>
      {children}
    </div>
  );
};

export default AuthBlock;
