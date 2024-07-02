import React, { Suspense } from "react";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueCart from "../../ui/dashboard/RevenueChart";
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
//import { Chart } from "@/app/dashboard/(overview)/chart";
import { UserGrowth } from "../../ui/dashboard/multiaxis";
import ChartWrap from "./chartWrap";
import {
  CardWraperSkeleton,
  ChartSkeleton,
  ChartWraperSkeleton,
} from "@/components/ui/skeleton";

export default async function page() {
  const breadcrumbs = [{ label: "Dashboard", href: "/dashboard" }];

  return (
    <div className="mt-12">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title title="Dashboard" />

      <main className="grid gap-4  md:grid-cols-1 p-4 px-6 ">
        <div className="">
          <Suspense fallback={<CardWraperSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>

        <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <Suspense fallback={<ChartWraperSkeleton />}>
            <ChartWrap />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
