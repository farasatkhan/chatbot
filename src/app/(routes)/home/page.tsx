import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import type { User } from "next-auth";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/home");
  }

  return (
    <main className="">
      <p>Dashboard</p>
      <p>Role {session?.user.role}</p>
    </main>
  );
}
