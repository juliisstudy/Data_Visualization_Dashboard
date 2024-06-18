"use client";
import { PlayerField } from "@/app/lib/definition";
import { useFormState } from "react-dom";
import { createSubscribe } from "@/app/lib/action";
import Link from "next/link";
import { Button } from "@/app/ui/button";

export default function Form({ players }: { players: PlayerField[] }) {
  const initialState = { message: "", error: {} };
  const [state, dispatch] = useFormState(createSubscribe, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <label htmlFor="player" className="mb-2 block text-sm font-medium">
          Choose a player
        </label>
        <div className="relative">
          <select
            id="player"
            name="playerId"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-50"
            defaultValue=""
            aria-describedby="player-error"
          >
            <option value="" disabled>
              Select a player
            </option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name}
              </option>
            ))}
          </select>
        </div>

        <div id="player-error" aria-live="polite" aria-atomic="true">
          {state.errors?.playerId &&
            state.errors.playerId.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
            </div>
          </div>

          <div id="amount-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <fieldset>
            <legend className="mb-2 block text-sm font-medium">
              Set the subscribe status
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="active"
                    name="status"
                    type="radio"
                    value="active"
                    className="text-white-600 h-4 w-4 cursor-pointer border-gray-300 focus:ring-2"
                  />
                  <label
                    htmlFor="active"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5"
                  >
                    Active
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="cancelled"
                    name="status"
                    type="radio"
                    value="cancelled"
                    className="text-white-600 h-4 w-4 cursor-pointer border-gray-300 focus:ring-2"
                  />
                  <label
                    htmlFor="cancelled"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5"
                  >
                    Cancelled
                  </label>
                </div>
              </div>
            </div>

            <div id="status-error" aria-live="polite" aria-atomic="true">
              {state.errors?.status &&
                state.errors.status.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </fieldset>

          <div aria-live="polite" aria-atomic="true">
            {state.message ? (
              <p className="mt-2 text-sm text-red-500">{state.message}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/invoice"
            className="flex h-10 items-center rounded-lg bg-gray-100"
          >
            Cancel
          </Link>
          <Button type="submit">Create Subscribe</Button>
        </div>
      </div>
    </form>
  );
}
