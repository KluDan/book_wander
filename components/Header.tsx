import { Logo } from "@/public/assets/icons";
import Link from "next/link";
import BurgerMenu from "./Menu";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="relative flex justify-between items-center bg-bgPrimary px-[20px] py-[11px] md:p-[16px] rounded-[15px]">
      <Link href="/" className="flex gap-[4px] cursor-pointer">
        <Logo className="w-[42px] h-[17px]" />
        <span className="hidden lg:block uppercase text-[18px] tracking-[0.02em] font-[700]">
          read journey
        </span>
      </Link>
      <Nav className="hidden md:block" isMobile={false} />
      <div className="flex gap-[16px] items-center">
        <div className="flex-center gap-[8px]">
          <span className="flex-center size-[40px] rounded-[50%] border border-componentStroke uppercase">
            d
          </span>
          <span className="hidden lg:block font-[700] tracking-[-0.02em]">
            Danchik
          </span>
        </div>
        <button
          type="button"
          className="hidden md:block py-[12px] px-[28px] rounded-[30px] border border-componentStroke tracking-[0.02em]"
        >
          Log out
        </button>

        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
