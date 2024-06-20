"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

const links = [
  { name: "Home", href: "/dashboard" },
  { name: "Subscribers", href: "/dashboard/subscribers" },
  { name: "Players", href: "/dashboard/players" },
];

export default function NavLink() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathname = usePathname();
  return (
    <>
      <NavbarMenu>
        {links.map((link, index) => {
          return (
            <NavbarMenuItem key={`${link}-${index}`}>
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
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </>
  );
}
