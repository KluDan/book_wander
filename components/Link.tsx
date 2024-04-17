"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkProps = {
  href: string;
  title: string;
  onClick: () => void;
};

const StyledLink = ({ href, title, onClick }: LinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`text-[14px] md:text-[16px] ${
        pathname === href
          ? "text-textPrimary relative w-max after:link_after"
          : "text-textSecondary"
      }`}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};
export default StyledLink;
