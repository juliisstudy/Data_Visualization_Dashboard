import { Metadata } from "next";
import { fetchFilteredPlayers } from "@/app/lib/data";
import PlayersTable from "@/app/ui/players/PlayersTable";

export const metadata: Metadata = {
  title: "Player",
};

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
    <main>
      <PlayersTable players={players} />
    </main>
  );
}
