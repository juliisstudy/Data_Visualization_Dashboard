"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/dashboard" },
  { name: "Subscribers", href: "/dashboard/subscribers" },
  { name: "Users", href: "/dashboard/users" },
];

export default function NavLink() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center font-medium hover:text-blue-50",
              {
                "text-blue-600": pathname === link.href,
              }
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
