import { InputHTMLAttributes } from "react";

type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
  type: "text" | "number" | "email" | "password";
};

const Input = ({ label, name, type, ...props }: TInputProps) => {
  return (
    <label
      htmlFor={name}
      className="bg-bgSecondary w-full flex gap-[10px] justify-between p-[14px] md:py-[16px] rounded-[12px] text-[12px] md:text-[14px] leading-[133%] tracking-[-0.02em]"
    >
      <span className=" text-textSecondary flex-shrink-0">{`${label}:`}</span>
      <input
        type={type}
        id={name}
        name={name}
        className="w-full border-none outline-none bg-transparent placeholder:text-textPrimary"
        placeholder="Enter text"
        autoComplete="off"
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  );
};

export default Input;
