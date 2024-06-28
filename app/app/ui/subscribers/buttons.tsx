import Link from "next/link";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { deleteSubscription } from "@/app/lib/action";
import { ButtonUI } from "@/app/ui/button";
import { FaRegTrashCan } from "react-icons/fa6";
export function CreateSubscribe() {
  return (
    <Link
      href={`/dashboard/subscribers/create`}
      className="flex h-10 items-center rounded-sm "
    >
      <ButtonUI className="hover:bg-sky-800">
        <span className="hidden md:block font-bold">Create</span>
        <PlusIcon className="h-5 md:ml-4" />
      </ButtonUI>
    </Link>
  );
}

export function UpdateSubscribeButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/subscribers/${id}/edit`}
      className="rounded-md border p-2 hover:bg-cyan-600 dark:hover:bg-sky-700"
    >
      <PencilIcon className="w-4 h-4 " />
    </Link>
  );
}

export function DeleteSubscriptionButton({ id }: { id: string }) {
  const deleteSubscriptionId = deleteSubscription.bind(null, id);
  return (
    <form action={deleteSubscriptionId}>
      <button className="rounded-md border p-2 hover:bg-cyan-600 dark:hover:bg-sky-700">
        <span className="sr-only">Delete</span>
        <FaRegTrashCan className="w-4 h-4" />
      </button>
    </form>
  );
}
