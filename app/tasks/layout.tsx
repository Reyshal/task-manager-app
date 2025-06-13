import Header from "@/components/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Header />
      {children}
    </div>
  );
}
