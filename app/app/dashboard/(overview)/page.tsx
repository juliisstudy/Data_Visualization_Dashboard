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

export default function page() {
  const breadcrumbs = [{ label: "Dashboard", href: "/dashboard" }];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title title="Dashboard" />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <Suspense>
            <CardWrapper />
          </Suspense>

          {/* <Suspense>
            <RevenueCart />
          </Suspense> */}
        </div>
      </main>
    </>
  );
}
