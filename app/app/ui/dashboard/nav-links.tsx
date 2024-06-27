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

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Image from "next/image";
import ImageSorce from "@/public/logo/Logo.png";

const links = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Subscribers", href: "/dashboard/subscribers", icon: Users2 },
  { name: "Players", href: "/dashboard/players", icon: Users2 },
];

export default function NavLink() {
  const pathname = usePathname();

  const linksGroupsMobile = links.map((link) => {
    const LinkIcon = link.icon;

    return (
      <Link
        key={link.href}
        href={link.href}
        className={clsx(
          "flex h-[50px] grow items-center font-medium hover:text-blue-50 hover:text-foreground",
          {
            "text-blue-600": pathname === link.href,
          }
        )}
      >
        <LinkIcon />
        <p>{link.name}</p>
      </Link>
    );
  });

  const linksGroupsDesktop = links.map((link) => {
    const LinkIcon = link.icon;
    return (
      <>
        <TooltipProvider key={link.href}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-start"
              >
                <LinkIcon />

                <p className="ml-8">{link.name}</p>
                <span className="sr-only"></span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="">{link.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </>
    );
  });

  return (
    <>
      <div className="flex w-full flex-col bg-muted/40 border border-blue-400 dark:bg-slate-900">
        <aside className="hidden fixed inset-y-0 left-0 flex-col border-r bg-background sm:flex dark:bg-slate-900">
          <nav className="flex flex-col items-start ml-2 gap-5 px-2 md:py-5">
            <Link href="#">
              <Image src={ImageSorce} width={180} height={180} alt="Logo" />
            </Link>
            <>{linksGroupsDesktop}</>
          </nav>
        </aside>

        {/* moble nav */}
        <div className="fixed top-0 flex flex-row items-start justify-start border border-blue-400 md:hidden">
          <header className="z-30 flex h-14 items-center gap-4 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
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
