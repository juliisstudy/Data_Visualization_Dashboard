import { Metadata } from "next";
import { fetchSubscriptionsById, fetchPlayers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/subscribers/breadcrumbs";
import { notFound } from "next/navigation";
import EditSubcriptionForm from "@/app/ui/subscribers/edit-form";
export const metadata: Metadata = {
  title: "Edit subscriptions",
};

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [subscriptions, players] = await Promise.all([
    fetchSubscriptionsById(id),
    fetchPlayers(),
  ]);

  const breadcrumbs = [
    { label: "Subscription", href: "/dashboard/subscribers" },
    {
      label: "Edit Subscription",
      href: `/dashboard/subscribers/${id}/edit`,
      active: true,
    },
  ];

  if (!subscriptions) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs breadcrumbs={breadcrumbs}></Breadcrumbs>
      <EditSubcriptionForm subscriptions={subscriptions} players={players} />
    </main>
  );
}
