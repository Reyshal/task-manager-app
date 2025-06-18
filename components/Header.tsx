"use client";

import axios from "@/lib/axios";
import { Button } from "./Button";

export default function Header() {
  const handleLogout = async () => {
    // This will clear the token from the cookie and it always success
    await axios.post("/auth/logout");

    // Redirect to the login page
    window.location.href = "/login";
  };

  return (
    <header className="py-4 shadow">
      <div className="flex items-center justify-between max-w-[1280px] mx-auto px-4 xl:px-0">
        <div className="text-xl font-semibold">Task Manager</div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </header>
  );
}
