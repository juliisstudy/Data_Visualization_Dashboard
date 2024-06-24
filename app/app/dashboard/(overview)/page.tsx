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

export default function page() {
  return (
    <>
      <Breadcrumb className=" sm:px-6 py-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className=" scroll-m-20 text-4xl font-bold tracking-tight sm:px-6 py-4">
        Dashboard
      </h1>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <Suspense>
            <CardWrapper />
          </Suspense>

          <Suspense>
            <RevenueCart />
          </Suspense>
        </div>
      </main>
    </>
  );
}
