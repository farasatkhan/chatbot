"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import type { User } from "next-auth";

const Settings = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });

  return (
    <div>
      <p>Dashboard</p>
      <p>Role {session?.user.role}</p>
    </div>
  );
};

export default Settings;
