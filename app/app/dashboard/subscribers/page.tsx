import { Metadata } from "next";
import { fetchSubscribersPages } from "@/app/lib/data";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/pagination";
export const metadata: Metadata = {
  title: "Subscribers",
};

export default async function Subscribers({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchSubscribersPages(query);

  return (
    <div className="w-full">
      <div>
        <h1>Subscribers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search subscribers" />
      </div>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPage={totalPages} />
      </div>
    </div>
  );
}
