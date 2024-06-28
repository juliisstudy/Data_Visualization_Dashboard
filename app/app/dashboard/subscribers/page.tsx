import { Metadata } from "next";
import { fetchSubscribersPages } from "@/app/lib/data";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/pagination";
import { Suspense } from "react";
import SubscribersTable from "@/app/ui/subscribers/table";
import { CreateSubscribe } from "@/app/ui/subscribers/buttons";
import { SubscribersTableSkeleton } from "@/app/ui/skeletons";
import { Title } from "@/app/ui/title";
import Breadcrumbs from "@/app/ui/subscribers/breadcrumbs";
export const metadata: Metadata = {
  title: "Subscriptions",
};

const breadcrumbs = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Subscriptions", href: "/dashboard/subscribers" },
];

export default async function Subscribers({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchSubscribersPages(query);

  return (
    <div className=" mt-12">
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <Title title="Subscriptions" />
      <div className="w-full sm:px-6 md:w-4/5 dark:bg-slate-900">
        <div className="mt-4 flex items-center justify-between gap-3 md:mt-2">
          <Search placeholder="Search subscribers" />
          <CreateSubscribe />
        </div>
        <Suspense
          key={query + currentPage}
          fallback={<SubscribersTableSkeleton />}
        >
          <SubscribersTable query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPage={totalPages} />
        </div>
      </div>
    </div>
  );
}
