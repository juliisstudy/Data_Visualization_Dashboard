import React from "react";
import Link from "next/link";

import NavLink from "./nav-links";
export default function Sidenav() {
  return (
    <div className="flex h-full flex-col  dark:bg-slate-900">
      {/* <Link className="flex h-10 bg-white md:h-35" href="/">
        <div>LOGO</div>
      </Link> */}

      <NavLink />

      <div>sign out</div>
    </div>
  );
}
