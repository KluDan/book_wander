import { getCurrentUser } from "@/app/actions";
import { Logo } from "@/public/assets/icons";
import Link from "next/link";
import LogoutForm from "./LogoutForm";
import BurgerMenu from "./Menu";
import Nav from "./Nav";

const Header = async () => {
  const user = await getCurrentUser();
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
            {user.name?.slice(0, 1).toUpperCase()}
          </span>
          <span className="hidden lg:block font-[700] tracking-[-0.02em]">
            {user.name}
          </span>
        </div>
        <LogoutForm />

        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
