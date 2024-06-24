import React from "react";
import Sidenav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-60">
        <Sidenav />
      </div>
      <div className="grow">{children}</div>
    </div>
  );
}
