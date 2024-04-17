"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "@/public/assets/icons";
import { useState } from "react";
import Nav from "./Nav";

const BurgerMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };
  return (
    <div className="md:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer" onClick={toggleSheet} />
        </SheetTrigger>
        <SheetContent className="flex flex-col pt-[35vh] items-center justify-between">
          <Nav
            className="flex flex-col gap-[28px]"
            isMobile={true}
            closeMenu={() => setIsSheetOpen(false)}
          />
          <SheetClose asChild>
            <button
              type="submit"
              onClick={() => console.log("Close")}
              className="py-[12px] px-[28px] rounded-[30px] border border-componentStroke tracking-[0.02em]"
            >
              Log out
            </button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BurgerMenu;
