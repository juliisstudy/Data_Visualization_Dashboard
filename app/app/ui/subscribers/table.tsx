import { fetchFilteredSubscribers } from "@/app/lib/data";
import Image from "next/image";
import SubscriberStatus from "./subscriberStatus";
import { UpdateSubscribeButton, DeleteSubscriptionButton } from "./buttons";
import { formatCurrency } from "@/app/lib/utils";
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
                        className="mr-2 rounded-sm"
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
                <div className="flex justify-center items-center gap-2">
                  <UpdateSubscribeButton id={subscriber.id} />
                  <DeleteSubscriptionButton id={subscriber.id} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Player
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Amount
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {subscribers.map((subscriber) => (
                  <tr
                    key={subscriber.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={subscriber.image_url}
                          className="rounded-sm"
                          width={28}
                          height={28}
                          alt={`${subscriber.name}'s profile picture`}
                        />
                        <p>{subscriber.name}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {subscriber.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {formatCurrency(subscriber.amount)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3"></td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <SubscriberStatus status={subscriber.status} />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 ">
                      <div className="flex gap-3">
                        <UpdateSubscribeButton id={subscriber.id} />
                        <DeleteSubscriptionButton id={subscriber.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
