import axios, { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    // Call the login endpoint
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      { email, password },
    );
    const { token } = response.data;

    // Set the token as a cookie
    const result = NextResponse.json(
      { message: "Login success" },
      { status: 200 },
    );

    result.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return result;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        { error: error.response?.data.error || "Login failed" },
        { status: error.status || 500 },
      );
    }

    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
