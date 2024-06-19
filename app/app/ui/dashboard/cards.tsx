import { fetchCardData } from "@/app/lib/data";
export default async function CardWrapper() {
  const {
    numberOfPlayers,
    numberOfSubscriptions,
    numberOfActiveSubscriptions,
    totalRevenues,
  } = await fetchCardData();
  return (
    <div>
      <Card title="Total Players" value={numberOfPlayers} type="players" />
      <Card
        title="Total Subscriptions"
        value={numberOfSubscriptions}
        type="subscribers"
      />
      <Card
        title="Total Active Subscriptions"
        value={numberOfActiveSubscriptions}
        type="active"
      />
      <Card title="Total revenues" value={totalRevenues} type="revenues" />
    </div>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "subscribers" | "players" | "active" | "revenues";
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex-p-4">
        <h3>{title}</h3>
      </div>
      <p>{value}</p>
    </div>
  );
}
