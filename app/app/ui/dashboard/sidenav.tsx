import React from "react";
import Link from "next/link";
import { signOut } from "@/app/auth";
import { ModeToggle } from "@/components/toggleTheme";

import NavLink from "./nav-links";
export default function Sidenav() {
  return (
    <div className="fixed top-0 z-30 flex flex-row w-full h-14 justify-center  bg-slate-200 dark:bg-slate-900">
      {/* <Link className="flex h-10 bg-white md:h-35" href="/">
        <div>LOGO</div>
      </Link> */}
      <div className="absolute left-0">
        <NavLink />
      </div>

      <div className="border border-blue-100 flex flex-row items-center absolute right-8 gap-2 mt-1 md:m-2 ">
        <div className="border border-blue-400 ">
          <ModeToggle />
        </div>
        <div className="border border-pink-400">
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className="font-medium">
              <div>Sign out</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
