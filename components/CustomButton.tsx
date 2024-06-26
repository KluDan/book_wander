import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
  };

const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(clsx(buttonVariants({ variant, className })))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

const buttonVariants = cva(
  "inline-block border border-transparent rounded-[30px] text-[14px] leading-[129%] tracking-[0.02em] font-[700] md:text-[16px] md:leading-[112%] transition focus:outline-none",
  {
    variants: {
      variant: {
        filled:
          "py-[12px] px-[45px] md:py-[16px] md:px-[54px] bg-textPrimary text-bgPrimary hover:text-textPrimary hover:bg-transparent hover:border-componentStroke md:text-[20px] md:leading-[100%] focus:text-textPrimary focus:bg-transparent focus:border-componentStroke xl:focus:none",
        outlined:
          "px-[20px] py-[10px] md:py-[12px] md:px-[28px] border-componentStroke bg-transparent text-textPrimary hover:border-transparent hover:bg-textPrimary hover:text-bgPrimary focus:border-transparent focus:bg-textPrimary focus:text-bgPrimary xl:focus:none",
      },
    },
    defaultVariants: {
      variant: "outlined",
    },
  }
);
