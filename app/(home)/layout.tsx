import Header from "@/components/Header";
import QueryProvider from "@/providers/QueryProvider";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <QueryProvider>
      <div className="bg-gray-50 flex flex-col min-h-screen">
        <Header />
        <div className="space-y-4 max-w-[1280px] w-full mx-auto py-4 px-4 xl:px-0">
          {children}
        </div>
      </div>
    </QueryProvider>
  );
}
