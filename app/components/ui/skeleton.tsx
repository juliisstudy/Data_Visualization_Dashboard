const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };

export function CardSkeleton() {
  return (
    <Skeleton
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <Skeleton className="flex p-4">
        <Skeleton className="h-5 w-5 rounded-md bg-gray-200" />
        <Skeleton className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </Skeleton>
      <Skeleton className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <Skeleton className="h-7 w-20 rounded-md bg-gray-200" />
      </Skeleton>
    </Skeleton>
  );
}

export function CardWraperSkeleton() {
  return (
    <Skeleton
      className={`${shimmer}  relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm grid gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}
    >
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </Skeleton>
  );
}

export function ChartSkeleton() {
  return (
    <Skeleton
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm min-h-70 md:min-h-80 lg:min-h-96`}
    >
      <Skeleton className="flex p-4">
        <Skeleton className="h-5 w-5 rounded-md bg-gray-200" />
        <Skeleton className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </Skeleton>
    </Skeleton>
  );
}

export function ChartWraperSkeleton() {
  return (
    <>
      <ChartSkeleton />
      <ChartSkeleton />
    </>
  );
}
export default function DashboardSkeleton() {
  return (
    <>
      <Skeleton
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />

      <main className="grid gap-4  border border-blue-200 md:grid-cols-1 p-4 px-6 ">
        <CardWraperSkeleton />
        <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <ChartWraperSkeleton />
        </div>
      </main>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

export function PlaySkeleton() {
  return (
    <div className="w-full sm:px-6 md:w-4/5 text-slate-300 dark:bg-slate-900">
      <div className="mt-6 flow-root dark:bg-slate-900 text-slate-300">
        <div className="overflow-x-auto dark:bg-slate-900">
          <div className="inline-block min-w-full align-middle dark:bg-slate-900">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0 dark:bg-slate-900 dark:text-gray-50">
              <Skeleton className="md:hidden">
                <div className="mb-2 w-full bg-white p-4 text-slate-700 dark:bg-slate-900 border-b border-slate-500 md:border-none rounded-md dark:text-slate-400">
                  <div className="flex items-center justify-between border-b pb-4">
                    <Skeleton className="mb-2 flex items-center"></Skeleton>
                    <Skeleton className="mb-2 flex items-center"></Skeleton>
                    <Skeleton className="mb-2 flex items-center"></Skeleton>
                  </div>
                  <div className="flex w-full items-center justify-between border-b py-5">
                    <div className="flex w-1/2 flex-col"></div>
                    <div className="flex w-1/2 flex-col"></div>
                  </div>
                  <div className="pt-4 text-sm"></div>
                </div>
              </Skeleton>
              <table className="hidden min-w-full rounded-md text-slate-700 md:table dark:bg-slate-900 ">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal dark: border-b dark:border-gray-300 dark:bg-slate-900 dark:text-gray-50">
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

                <tbody className="divide-y divide-gray-200 text-gray-900 dark:bg-slate-900 p-4">
                  <tr className="p-4 group dark:bg-slate-900">
                    <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-slate-700 group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6 dark:bg-slate-900 dark:text-white dark:border-b border-slate-500">
                      <div className="flex items-center gap-3"></div>
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm  dark:bg-slate-900 dark:text-white dark:border-b border-slate-500"></td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm  dark:bg-slate-900 dark:text-white dark:border-b border-slate-500"></td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm  dark:bg-slate-900 dark:text-white dark:border-b border-slate-500"></td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md  dark:bg-slate-900 dark:text-white dark:border-b border-slate-500"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
