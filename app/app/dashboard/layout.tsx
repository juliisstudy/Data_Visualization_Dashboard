import React from "react";
import Sidenav from "../ui/dashboard/sidenav";
import { ModeToggle } from "@/components/toggleTheme";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex w-full h-screen flex-col items-center md:flex-row overflow-hidden md:items-start">
      <div className=" flex-none w-52 dark:bg-slate-900">
        <Sidenav />
      </div>
      <div className="dark:bg-slate-900 grow ">
        <div className="flex flex-row-reverse mr-16">
          <ModeToggle />
        </div>

        {children}
      </div>
    </div>
  );
}
