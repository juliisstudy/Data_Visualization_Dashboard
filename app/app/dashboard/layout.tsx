import React from "react";
import Sidenav from "../ui/dashboard/sidenav";
import { ModeToggle } from "@/components/toggleTheme";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col  bg-slate-100  dark:bg-black md:flex-row md:overflow-hidden">
      <div className="flex-none w-1/6">
        <Sidenav />
      </div>
      <div className="grow">
        <div className=" flex flex-row-reverse mr-16">
          <ModeToggle />
        </div>

        {children}
      </div>
    </div>
  );
}
