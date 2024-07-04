"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PanelLeft, Home, Users2 } from "lucide-react";
import { signOut } from "@/app/auth";
import { ModeToggle } from "@/components/toggleTheme";
import { PiUsersFill } from "react-icons/pi";
import { PiUsers } from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Image from "next/image";
import ImageSorce from "@/public/logo/Logo.png";
import ImageSorceDark from "@/public/logo/LogoDark.png";

const links = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Subscribers", href: "/dashboard/subscribers", icon: PiUsersFill },
  { name: "Players", href: "/dashboard/players", icon: PiUsers },
];

export default function NavLink() {
  const pathname = usePathname();

  const linksGroupsMobile = links.map((link, index) => {
    const LinkIcon = link.icon;

    return (
      <Link
        key={index}
        href={link.href}
        className={clsx(
          "flex h-[50px] grow items-center font-medium hover:text-blue-500 ",
          {
            "text-blue-600": pathname === link.href,
          }
        )}
      >
        <LinkIcon className=" w-6 h-6" />

        <p className="ml-4 hover:text-blue-500">{link.name}</p>
      </Link>
    );
  });

  const linksGroupsDesktop = links.map((link, index) => {
    const LinkIcon = link.icon;
    return (
      <>
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className="flex items-center justify-start py-2"
              >
                <LinkIcon className="w-6 h-6" />
                <p className="ml-6 font-medium hover:text-sky-800">
                  {link.name}
                </p>
                <span className="sr-only"></span>
              </Link>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </>
    );
  });

  return (
    <>
      <div className="flex w-full flex-col bg-muted/40 bg-white bg-opacity-70 dark:bg-slate-900 dark:bg-opacity-80">
        <aside className="hidden fixed inset-y-0 left-0 flex-col border-r bg-background sm:flex drop-shadow-md bg-white bg-opacity-90 dark:bg-slate-900">
          <nav className="flex flex-col items-start ml-4 gap-5 px-2 md:py-5">
            <Link href="#">
              <Image
                src={ImageSorce}
                width={180}
                height={180}
                alt="Logo"
                className="block dark:hidden"
                priority={false}
              />
              <Image
                src={ImageSorceDark}
                width={180}
                height={180}
                alt="Logo"
                className="hidden dark:block"
                priority={false}
              />
            </Link>
            <>{linksGroupsDesktop}</>
          </nav>
        </aside>

        {/* moble nav */}
        <div className="fixed top-0 flex flex-row items-center mt-1 justify-start md:hidden">
          <header className="z-30 flex h-14 items-center gap-4 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="sm:max-w-xs  bg-white bg-opacity-95 dark:bg-slate-950 "
              >
                <nav className="grid gap-6 text-lg font-medium ">
                  {linksGroupsMobile}
                </nav>
              </SheetContent>
            </Sheet>
          </header>
        </div>
      </div>
    </>
  );
}
