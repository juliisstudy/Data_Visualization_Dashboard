import { Metadata } from "next";
import { fetchFilteredPlayers } from "@/app/lib/data";
import PlayersTable from "@/app/ui/players/PlayersTable";
import { Title } from "@/app/ui/title";
import Breadcrumbs from "@/app/ui/subscribers/breadcrumbs";

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
  const players = await fetchFilteredPlayers(query);

  return (
    <div className=" mt-12">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title title="Players" />

      <main className="md:mt-2">
        <PlayersTable players={players} />
      </main>
    </div>
  );
}
