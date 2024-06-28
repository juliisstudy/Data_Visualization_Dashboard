import React from "react";
import Sidenav from "../ui/dashboard/sidenav";
import { ModeToggle } from "@/components/toggleTheme";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex w-full flex-col md:flex-row overflow-hidden md:items-start">
      <div className="w-full flex-none dark:bg-slate-900 sm:w-52 ">
        <Sidenav />
      </div>
      <div className="ml-2 mr-2 mt-3 md:ml-0 md:mr-0 dark:bg-slate-900 grow overflow-visible h-auto ">
        {children}
      </div>
    </div>
  );
}
