"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PanelLeft, Home, Users2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

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
          "flex h-[48px] grow items-center font-medium hover:text-blue-50 hover:text-foreground",
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
      <div className="flex  w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0  z-10 hidden w-48 flex-col border-r bg-background sm:flex mr-10 ">
          <nav className="flex flex-col items-start ml-2 mt-2 gap-5 px-2 sm:py-5">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <div className="h-4 w-4 transition-all group-hover:scale-110" />{" "}
              icon
              <span className="sr-only">Game</span>
            </Link>
            <>{linksGroupsDesktop}</>
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
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
