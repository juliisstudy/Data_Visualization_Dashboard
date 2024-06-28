import { Metadata } from "next";
import { fetchPlayers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/subscribers/breadcrumbs";
import Form from "@/app/ui/subscribers/create-form";

export const metadata: Metadata = {
  title: "Add a subscribe",
};

const breadcrumbs = [
  { label: "Subscribers", href: "/dashboard/subscribers" },
  {
    label: "Add a subcribe",
    href: "/dashboard/subscribers/create",
    active: true,
  },
];
export default async function Page() {
  const players = await fetchPlayers();
  return (
    <main className="mt-12">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Form players={players} />
    </main>
  );
}
