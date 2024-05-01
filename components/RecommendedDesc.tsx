import Link from "next/link";
import Image from "next/image";

import { Arrow } from "@/public/assets/icons";
import books from "../public/assets/images/books.png";

const Description = () => {
  const steps = [
    {
      number: 1,
      textHighlighted: "Create a personal library: ",
      text: "add the books you intend to read to it.",
    },
    {
      number: 2,
      textHighlighted: "Create your first workout: ",
      text: "define a goal, choose a period, start training.",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-[20px] md:gap-0 mt-[20px] md:mt-0 rounded-[12px] p-[20px] bg-bgSecondary">
        <h2 className="font-[700] text-[18px] md:text-[20px] md:mb-[40px] leading-[100%] tracking-[-0.02em]">
          Start your workout
        </h2>
        <ul className="space-y-[20px] md:mb-[26px]">
          {steps.map((step, index) => (
            <li key={index} className="flex justify-start gap-[12px]">
              <div className="flex-shrink-0 flex-center size-[40px] md:size-[44px] rounded-full bg-textPrimary text-bgPrimary font-[700] text-[18px] md:text-[20px] leading-[100%] tracking-[-0.02em]">
                {step.number}
              </div>
              <p className="text-textSecondary text-[14px] leading-[129%] tracking-[-0.02em] ">
                <span className="text-textPrimary">{step.textHighlighted}</span>
                {step.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <h3 className="text-textSecondary text-[14px] leading-[129%] tracking-[-0.02em] underline transition cursor-pointer hover:text-textPrimary">
            My library
          </h3>
          <Link href="/library">
            <Arrow className="size-[24px]" />
          </Link>
        </div>
      </div>
      <div className="hidden xl:flex items-center rounded-[12px] px-[20px] py-[15px] bg-bgSecondary gap-[14px]">
        <Image src={books} width={40} height={40} alt="Books" />
        <p className="text-textSecondary text-[14px] leading-[129%] tracking-[-0.02em]">
          "Books are <span className="text-textPrimary">windows</span> to the
          world, and reading is a journey into the unknown."
        </p>
      </div>
    </>
  );
};

export default Description;
