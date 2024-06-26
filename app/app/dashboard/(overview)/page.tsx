import React, { Suspense } from "react";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueCart from "./RevenueChart";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Title } from "@/app/ui/title";
import Breadcrumbs from "@/app/ui/subscribers/breadcrumbs";
import { Chart } from "@/app/dashboard/(overview)/chart";
import { UserGrowth } from "./multiaxis";

export default function page() {
  const breadcrumbs = [{ label: "Dashboard", href: "/dashboard" }];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title title="Dashboard" />
      <main className="grid flex-1 gap-4 p-4 px-6 border border-blue-400 sm:items-center justify-center md:grid-cols-1 ">
        <div className="border border-blue-400">
          <Suspense>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="grid flex-1 items-start gap-6 mt-6 border border-blue-400">
          sdfadf
        </div>
        {/* <div className="grid flex-1 justify-start items-start gap-6 mt-6 md:grid-cols-2 pl-0">
          <div className="justify-start">
            <Chart />
          </div>
          <div className="justify-end">
            <UserGrowth />
          </div>
        </div> */}
        {/* <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:grid-cols-3"> */}

        {/* <Chart /> */}
        {/* <UserGrowth /> */}
        {/* <Suspense>
            <RevenueCart />
          </Suspense> */}
      </main>
    </>
  );
}
