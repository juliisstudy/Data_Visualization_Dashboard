import { Metadata } from "next";
import { fetchFilteredPlayers, fetchPlayersPages } from "@/app/lib/data";
import PlayersTable from "@/app/ui/players/PlayersTable";
import { Title } from "@/app/ui/title";
import Breadcrumbs from "@/app/ui/subscribers/breadcrumbs";
import { Suspense } from "react";
import { PlaySkeleton, TableRowSkeleton } from "@/components/ui/skeleton";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";

export const metadata: Metadata = {
  title: "Player",
};
const breadcrumbs = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Players", href: "/dashboard/players" },
];

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  //const players = await fetchFilteredPlayers(query);

  const totalPages = await fetchPlayersPages(query);

  return (
    <div className=" mt-12">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title title="Players" />

      <div className="w-full sm:px-6 md:w-4/5 ">
        <Suspense key={query + currentPage} fallback={<TableRowSkeleton />}>
          <PlayersTable query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex justify-center">
          <Pagination totalPage={totalPages} />
        </div>
      </div>
    </div>
  );
}
