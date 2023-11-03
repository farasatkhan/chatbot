"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Settings = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/settings");
    },
  });

  return <div>Settings</div>;
};

export default Settings;
