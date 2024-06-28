import React from "react";
import Link from "next/link";
import { signOut } from "@/app/auth";
import { ModeToggle } from "@/components/toggleTheme";
import { Button } from "@/components/ui/button";

import NavLink from "./nav-links";
export default function Sidenav() {
  return (
    <div className="fixed top-0 z-30 bg-gradient-to-r from-white to-transparent flex flex-row w-full h-16 justify-center pd-1 pt-2 border-b border-slate-300 dark:bg-slate-900 md:pt-1 pb-6 ">
      {/* <Link className="flex h-10 bg-white md:h-35" href="/">
        <div>LOGO</div>
      </Link> */}
      <div className="absolute left-0 ml-1">
        <NavLink />
      </div>

      <div className="flex flex-row items-end absolute right-2 gap-2 mr-1 mt-1 md:m-2 md:right-5">
        <div className=" ">
          <ModeToggle />
        </div>
        <div className="">
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button className="font-medium  ">
              <div>Sign out</div>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
