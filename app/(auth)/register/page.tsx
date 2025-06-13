"use client";

import axios from "@/lib/axios";
import { useState } from "react";

export default function Register() {
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
    error: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent the form from submitting
    e.preventDefault();
    setState({ ...state, error: "" });

    // Call the register endpoint
    const response = await axios.post("/auth/register", state);

    if (response.status !== 200) {
      setState({ ...state, error: response.data.error });
      return;
    }

    // Redirect to the login page
    window.location.href = "/login";
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
      <h1 className="text-2xl text-center">Register your account</h1>
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
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          onChange={(e) => setState({ ...state, username: e.target.value })}
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
        Sign Up
      </button>
      <div className="text-center">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600">
          Sign In
        </a>
      </div>
    </form>
  );
}
