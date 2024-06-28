import clsx from "clsx";
import { GrStatusGood } from "react-icons/gr";
import { GrStatusDisabled } from "react-icons/gr";
export default function SubscriberStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-start px-4 py-3 text-xs rounded-full w-[100px]",
        {
          "bg-gray-100 text-gray-500": status === "cancelled",
          "bg-cyan-500 text-white": status === "active",
        }
      )}
    >
      {status === "cancelled" ? (
        <>
          Cancelled{" "}
          {/* <GrStatusDisabled className="hidden md:ml-1 w-6 h-6 text-gray-300" /> */}
        </>
      ) : null}
      {status === "active" ? (
        <>
          Subscribed
          {/* <GrStatusGood className="hidden md:ml-1 w-6 h-6 text-white" /> */}
        </>
      ) : null}
    </span>
  );
}
