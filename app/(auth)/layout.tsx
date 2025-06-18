import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("token")?.value;

  if (token) {
    redirect("/");
  }

  return (
    <div className="bg-gray-50 flex h-screen items-center justify-center">
      <div className="w-[460px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-10 px-8 rounded-2xl">
        {children}
      </div>
    </div>
  );
}
