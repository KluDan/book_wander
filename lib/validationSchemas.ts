import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(7),
});

export const loginSchema = z.object({
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(7),
});
