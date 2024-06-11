import React from "react";
import Link from "next/link";
import NavLink from "./nav-links";

export default function Sidenav() {
  return (
    <div className="flex h-full flex-col">
      <Link className="flex h-10 bg-white md:h-35" href="/">
        <div>LOGO</div>
      </Link>
      <div>
        <div>
          <NavLink />
        </div>
        <div>sign out</div>
      </div>
    </div>
  );
}
