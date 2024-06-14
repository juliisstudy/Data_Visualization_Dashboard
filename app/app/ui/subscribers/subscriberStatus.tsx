import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function SubscriberStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx("inline-flex items-center px-2 py-1 text-xs", {
        "bg-gray-100 text-gray-50": status === "cancelled",
        "bg-green-500 text-white": status === "active",
      })}
    >
      {status === "cancelled" ? (
        <>
          Cancelled <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === "active" ? (
        <>
          Active
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
