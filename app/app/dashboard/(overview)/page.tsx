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
    <div className="border border-red-400 mt-12">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title title="Dashboard" />
      <main className="grid gap-4 border border-blue-400 md:grid-cols-1 p-4 px-6 ">
        <div className="border border-blue-400">
          <Suspense>
            <CardWrapper />
          </Suspense>
        </div>
        {/* grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 */}

        <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 border border-purple-700 lg:grid-cols-2">
          <div className="border border-red-400 md:min-h-80 lg:min-h-96">
            <Chart />
          </div>
          <div className="border border-red-400 md:min-h-80 lg:min-h-96 ">
            <UserGrowth />
          </div>
        </div>

        {/* <div className="flex flex-col w-full border border-red-400 items-start sm:flex-row md:flex-row">
          <div className="border border-red-400 min-h-64 grow flex-1 md:w-1/2 md:min-h-80 lg:min-h-96">
            <Chart />
          </div>
          <div className="border border-red-400  min-h-64 grow flex-1 md:w-1/2 md:min-h-80 lg:min-h-96">
            <UserGrowth />
          </div>
        </div> */}
        {/* grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 */}
        {/* <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:grid-cols-3"> */}
        {/* <Chart /> */}
        {/* <UserGrowth /> */}
        {/* <Suspense>
            <RevenueCart />
          </Suspense> */}
      </main>
    </div>
  );
}
