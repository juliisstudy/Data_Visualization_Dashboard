import { fetchNumberOfPlayers, fetchNumberOfSubscribers } from "@/app/lib/data";
import { ChartOBj } from "../../ui/dashboard/chart";
import { faker } from "@faker-js/faker";
import { UserGrowth } from "../../ui/dashboard/multiaxis";

export default async function ChartWrap() {
  const numberOfplayers = await fetchNumberOfPlayers();
  const numberOfSubscribers = await fetchNumberOfSubscribers();

  const months = numberOfplayers.map((numberOfplayer) => numberOfplayer.month);
  const users = numberOfplayers.map(
    (numberOfplayer) => numberOfplayer.numberofuser
  );
  const subscribers = numberOfSubscribers.map(
    (numberOfSubscriber) => numberOfSubscriber.numberofsubscribers
  );

  return (
    <>
      <div className="min-h-70 md:min-h-80 lg:min-h-96">
        <ChartOBj nums={users} labels={months} numsSecond={subscribers} />
      </div>
      <div className="min-h-70 md:min-h-80 lg:min-h-96 ">
        <UserGrowth nums={users} labels={months} numsSecond={subscribers} />
      </div>
    </>
  );
}
