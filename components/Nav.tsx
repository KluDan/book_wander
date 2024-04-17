"use client";
import { useCallback } from "react";
import StyledLink from "./Link";

type NavProps = {
  className?: string;
  isMobile: boolean;
  closeMenu?: () => void;
};

const Nav = ({ className, isMobile, closeMenu }: NavProps) => {
  const handleLinkClick = useCallback(() => {
    if (closeMenu) {
      closeMenu();
    }
  }, [closeMenu]);

  return (
    <nav
      className={`${
        isMobile
          ? ""
          : "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] space-x-[32px]"
      } ${className}`}
    >
      <StyledLink href="/" title="Home" onClick={handleLinkClick} />
      <StyledLink
        href="/library"
        title="My library"
        onClick={handleLinkClick}
      />
    </nav>
  );
};

export default Nav;
