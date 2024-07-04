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
    <div className="mt-6 flow-root dark:bg-slate-900">
      <div className="inline-block min-w-full align-middle ">
        <div className="rounded-lg bg-gray-50 p-2 dark:bg-slate-900 md:pt-0">
          <div className="md:hidden">
            {subscribers?.map((subscriber, index) => (
              <div
                key={index}
                className="mb-2 w-full rounded-sm bg-white p-3 dark:bg-slate-900"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={subscriber.image_url}
                        className="mr-2 rounded-sm"
                        width={28}
                        height={28}
                        alt={`${subscriber.name}'s profile picture`}
                        unoptimized
                      />
                      <div>
                        <p>{subscriber.name}</p>
                        <p className="text-sm text-gray-500">
                          {subscriber.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-2 absolute right-6">
                    <SubscriberStatus status={subscriber.status} />
                    <UpdateSubscribeButton id={subscriber.id} />
                    <DeleteSubscriptionButton id={subscriber.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* desktop */}
          <div>
            <table className="hidden min-w-full text-gray-900 md:table dark:bg-slate-900">
              <thead className="rounded-sm text-left text-sm font-normal dark:bg-slate-900 dark:text-muted-foreground ">
                <tr className="">
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
              <tbody className="bg-white dark:bg-slate-900">
                {subscribers.map((subscriber, index) => (
                  <tr
                    key={index}
                    className="dark:bg-slate-900 p-4 w-full border-b text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-xs dark:text-slate-50"
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
