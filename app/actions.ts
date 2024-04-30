"use server";

import { FormState, SearchDataOptions } from "@/lib/types";
import { loginSchema, registerSchema } from "@/lib/validationSchemas";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API = process.env.API_URL;

export async function register(prevState: FormState, formData: FormData) {
  const parse = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return { errors: parse.error.flatten().fieldErrors };
  }

  const parsedData = parse.data;

  try {
    const response = await fetch(`${API}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedData),
    });

    if (!response.ok) {
      const error = await response.json();
      return error;
    }

    const result = await response.json();

    cookies().set("Authorization", result.token, {
      secure: true,
      httpOnly: true,
      expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
      path: "/",
      sameSite: "strict",
    });
  } catch (error) {
    return { message: "Failed to create account." };
  }
  redirect("/");
}

export async function login(prevState: FormState, formData: FormData) {
  const parse = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return { errors: parse.error.flatten().fieldErrors };
  }

  const parsedData = parse.data;

  try {
    const response = await fetch(`${API}/users/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedData),
    });

    if (!response.ok) {
      const error = await response.json();
      return error;
    }

    const result = await response.json();

    cookies().set("Authorization", result.token, {
      secure: true,
      httpOnly: true,
      expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
      path: "/",
      sameSite: "strict",
    });
  } catch (error) {
    return { error: "Failed to connect to the server" };
  }
  revalidatePath("/");
  redirect("/");
}

export async function logout() {
  cookies().delete("Authorization");
  redirect("/");
}

export async function getCurrentUser() {
  const token = cookies().get("Authorization")?.value;
  try {
    const response = await fetch(`${API}/users/current`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "force-cache",
    });

    const currentUserInfo = await response.json();
    return currentUserInfo;
  } catch (error) {
    console.error("Error fetching current user data:", error);
    throw error;
  }
}

export async function getRecommendedBooks(options: SearchDataOptions) {
  const token = cookies().get("Authorization")?.value;
  const { page, limit, author = "", title = "" } = options;
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    author,
    title,
  });
  const res = await fetch(`${API}/books/recommend?${params}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}
