"use client";

import axios from "@/lib/axios";

export default function Header() {
  const handleLogout = async () => {
    // This will clear the token from the cookie and it always success
    await axios.post("/auth/logout");

    // Redirect to the login page
    window.location.href = "/login";
  };

  return (
    <header className="flex items-center justify-between p-4 shadow">
      <h1 className="text-xl font-semibold">Task Manager</h1>
      <button
        type="submit"
        onClick={handleLogout}
        className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
      >
        Logout
      </button>
    </header>
  );
}
