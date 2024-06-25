import clsx from "clsx";
import { GrStatusGood } from "react-icons/gr";
import { GrStatusDisabled } from "react-icons/gr";
export default function SubscriberStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-start px-2 py-1 text-xs rounded-sm w-[100px]",
        {
          "bg-gray-100 text-gray-500": status === "cancelled",
          "bg-cyan-500 text-white": status === "active",
        }
      )}
    >
      {status === "cancelled" ? (
        <>
          Cancelled <GrStatusDisabled className="ml-2 w-4 h-4 text-gray-300" />
        </>
      ) : null}
      {status === "active" ? (
        <>
          Subscribed
          <GrStatusGood className="ml-1 w-4 h-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
