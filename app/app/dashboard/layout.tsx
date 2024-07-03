import React from "react";
import Sidenav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const darkMode =
    "dark:bg-gradient-to-r dark:from-indigo-950 dark:via-indigo-850 dark:to-slate-950";
  return (
    <div
      className={`${darkMode} flex w-full flex-col min-h-screen md:flex-row md:min-h-screen overflow-hidden md:items-start bg-gradient-to-r from-indigo-50 from-5% via-sky-50 via-30% to-emerald-50 to-80%`}
    >
      <div className="w-full flex-none sm:w-52 ">
        <Sidenav />
      </div>
      <div className="ml-2 mr-2 mt-3 md:ml-0 md:mr-0 grow overflow-visible h-auto  ">
        {children}
      </div>
    </div>
  );
}
