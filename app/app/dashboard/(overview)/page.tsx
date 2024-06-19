import React, { Suspense } from "react";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueCart from "./RevenueChart";
export default function page() {
  return (
    <main>
      <h1>Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense>
          <RevenueCart />
        </Suspense>
      </div>
    </main>
  );
}
