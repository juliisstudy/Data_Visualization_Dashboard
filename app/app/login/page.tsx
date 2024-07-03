import React from "react";
import LoginForm from "../ui/login-form";
import Image from "next/image";
import ImageSorce from "@/public/logo/Logo.png";
export default function page() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-50 from-5% via-sky-50 via-30% to-emerald-50 to-80%">
      <Image
        src={ImageSorce}
        width={180}
        height={180}
        alt="Logo"
        className="block dark:hidden mx-auto"
      />
      <LoginForm />
    </div>
  );
}
