"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

const AuthImgBlock = () => {
  return (
    <div className="content_block h-[351px] pt-[20px] px-[40px] md:p-[32px] md:gap-[32px] overflow-hidden md:hidden xl:block xl:h-[calc(100lvh-64px)] lg:pt-[80px] lg:px-[98px]">
      {/*  <Image
        src="/assets/images/iphone.png"
        alt="Iphone 15"
        width={255}
        height={500}
        className="mx-auto w-full h-auto"
        priority
      /> */}
      <CldImage
        width="411"
        height="835"
        src="iPhone_15"
        alt="Iphone 15"
        className="mx-auto w-full h-auto"
        priority
      />
    </div>
  );
};

export default AuthImgBlock;
