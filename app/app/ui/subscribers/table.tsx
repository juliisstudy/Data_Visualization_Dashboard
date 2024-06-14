import { fetchFilteredSubscribers } from "@/app/lib/data";
import Image from "next/image";
import SubscriberStatus from "./subscriberStatus";
import { UpdateSubscribeButton } from "./buttons";

export default async function SubscribersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const subscribers = await fetchFilteredSubscribers(query, currentPage);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {subscribers?.map((subscriber) => (
              <div
                key={subscriber.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pd-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={subscriber.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${subscriber.name}'s profile picture`}
                      />
                      <p>{subscriber.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{subscriber.email}</p>
                  </div>
                  <SubscriberStatus status={subscriber.status} />
                </div>
                <div className="flex justify-end gap-2">
                  <UpdateSubscribeButton id={subscriber.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
