import Link from "next/link";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { deleteSubscription } from "@/app/lib/action";

export function CreateSubscribe() {
  return (
    <Link
      href={`/dashboard/subscribers/create`}
      className="flex h-10 items-center rounded-lg bg-blue-600"
    >
      <span className="hidden md:block">Create</span>
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateSubscribeButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/subscribers/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteSubscriptionButton({ id }: { id: string }) {
  const deleteSubscriptionId = deleteSubscription.bind(null, id);
  return (
    <form action={deleteSubscriptionId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
      </button>
    </form>
  );
}
