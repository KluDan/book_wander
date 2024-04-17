const Input = ({}) => {
  return (
    <label
      htmlFor="title"
      className="bg-bgSecondary w-full flex gap-[10px] justify-between p-[14px] rounded-[12px] text-[12px] leading-[133%] tracking-[-0.02em]"
    >
      <span className=" text-textSecondary flex-shrink-0">Book title:</span>
      <input
        type="text"
        id="title"
        className="w-full border-none outline-none bg-transparent placeholder:text-textPrimary"
        placeholder="Enter text"
      />
    </label>
  );
};

export default Input;
