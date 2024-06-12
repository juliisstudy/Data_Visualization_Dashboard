import { PlayerTable } from "@/app/lib/definition";
import Search from "./Search";
import Image from "next/image";
export default async function PlayersTable({
  players,
}: {
  players: PlayerTable[];
}) {
  return (
    <div className=" w-full">
      <h1>Players</h1>
      <Search placeholder="search customers" />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="md:hidden">
              {players?.map((player) => (
                <div
                  key={player.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b">
                    <div>
                      <div className="mb-2 flex items-center">
                        <div className="flex items-center gap-3">
                          <Image
                            src={player.image_url}
                            className="rounded-full"
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
                      <p className="text-xs">Active</p>
                      <p className="font-medium">{player.total_active}</p>
                    </div>
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Cancelled</p>
                      <p className="font-medium">{player.total_cancelled}</p>
                    </div>
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Paid</p>
                      <p className="font-medium">{player.total_paid}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
              <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Total Active
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Total Cancelled
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Total Paid
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-900">
                {players.map((player) => (
                  <tr key={player.id} className="group">
                    <td className="whitespace-nowrap bg-white py-5 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:round-md">
                      <div className="flex items-center gap-3">
                        <Image
                          src={player.image_url}
                          className="rounded-full"
                          alt={`${player.name}'s profile picture`}
                          width={28}
                          height={28}
                        />
                        <p>{player.name}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      {player.email}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      {player.total_active}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      {player.total_cancelled}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
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
  );
}
