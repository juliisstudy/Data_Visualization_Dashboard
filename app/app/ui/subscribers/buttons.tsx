import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/solid";
export function UpdateSubscribeButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/subscribe/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
