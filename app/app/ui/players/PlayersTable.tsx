import Image from "next/image";
import Search from "@/app/ui/search";
import { FormattedPlayersTable } from "@/app/lib/definition";

export default async function PlayersTable({
  players,
}: {
  players: FormattedPlayersTable[];
}) {
  return (
    <div className="w-full sm:px-6 md:w-4/5 dark:bg-slate-800 text-slate-300">
      <Search placeholder="Search players..." />
      <div className="mt-6 flow-root dark:bg-slate-800 text-slate-300">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0 dark:bg-black">
              <div className="md:hidden">
                {players?.map((player) => (
                  <div
                    key={player.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={player.image_url}
                              className="rounded-sm"
                              alt={`${player.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{player.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">{player.email}</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{player.total_active}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{player.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{player.total_subscribe} invoices</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table dark:bg-black">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Invoices
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Pending
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Total Paid
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900 dark:bg-black">
                  {players.map((player) => (
                    <tr key={player.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={player.image_url}
                            className="rounded-sm"
                            alt={`${player.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{player.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm dark:bg-slate-800 text-slate-300">
                        {player.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {player.total_subscribe}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {player.total_cancelled}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {player.total_paid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
