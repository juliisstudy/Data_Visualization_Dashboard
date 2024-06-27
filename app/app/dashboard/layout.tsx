import React from "react";
import Sidenav from "../ui/dashboard/sidenav";
import { ModeToggle } from "@/components/toggleTheme";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-blue-400 flex w-full flex-col md:flex-row overflow-hidden md:items-start">
      <div className="w-full border border-red-400 flex-none dark:bg-slate-900 sm:w-52">
        <Sidenav />
      </div>
      <div className="dark:bg-slate-900 grow overflow-visible h-auto">
        {children}
      </div>
    </div>
  );
}
