import { fetchRevenue } from "@/app/lib/data";
import { ChartOBj } from "./chart";
import { faker } from "@faker-js/faker";

export default async function ChartWrap() {
  const revenue = await fetchRevenue();

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const numbers = labels.map(() => faker.number.int({ min: 0, max: 1000 }));
  return (
    <div>
      <ChartOBj nums={numbers} />
    </div>
  );
}
