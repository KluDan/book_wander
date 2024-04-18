"use client";
import { register } from "@/app/actions";
import Button from "@/components/CustomButton";
import Input from "@/components/Input";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";

const AuthForm = () => {
  const initialState = {
    message: "",
    errors: { email: [], password: [] },
  };
  const [state, formAction] = useFormState(register, initialState);
  return (
    <form
      action={formAction}
      className="flex flex-col gap-[20px] md:gap-[82px] w-full"
    >
      <div className="space-y-[8px] md:space-y-[14px] ">
        <Input label="Name" name="name" type="text" />
        <p> {state?.errors?.name}</p>
        <Input label="Mail" name="email" type="email" />
        <p> {state?.errors?.email}</p>
        <Input label="Password" name="password" type="password" />
        <p> {state?.errors?.password}</p>
      </div>
      <div className="flex items-center justify-between md:gap-[20px] md:justify-start">
        <Button type="submit" variant="filled" className="px-[29px]">
          Registration
        </Button>
        <Link
          href="/login"
          className="text-[12px] md:text-[14px] text-textSecondary leading-[117%] tracking-[-0.02em] underline"
        >
          Already have an account?
        </Link>
      </div>
      <p> {state?.message}</p>
    </form>
  );
};

export default AuthForm;
