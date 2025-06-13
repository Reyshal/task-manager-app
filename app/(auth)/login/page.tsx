"use client";

import axios from "@/lib/axios";
import { useState } from "react";

export default function LoginPage() {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent the form from submitting
    e.preventDefault();
    setState({ ...state, error: "" });

    // Call the login endpoint
    const response = await axios.post("/auth/login", state);

    if (response.status !== 200) {
      setState({ ...state, error: response.data.error });
      return;
    }

    // Redirect to the tasks page
    window.location.href = "/tasks";
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
      <h1 className="text-2xl text-center">Login to your account</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@example.com"
          onChange={(e) => setState({ ...state, email: e.target.value })}
          className="px-3 py-2 text-sm border border-gray-200 rounded-md"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          onChange={(e) => setState({ ...state, password: e.target.value })}
          className="px-3 py-2 text-sm border border-gray-200 rounded-md"
        />
        {state.error && (
          <p className="text-sm font-medium text-red-600">{state.error}</p>
        )}
      </div>

      <button type="submit" className="p-2 text-white bg-blue-600 rounded-md">
        Sign In
      </button>
      <div className="text-center">
        Don&apos;t have an account?{" "}
        <a href="/register" className="text-blue-600">
          Sign Up
        </a>
      </div>
    </form>
  );
}
