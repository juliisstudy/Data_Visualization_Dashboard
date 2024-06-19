"use client";

import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { error } from "console";
import Link from "next/link";
import { useFormState } from "react-dom";
import { UpdateSubscription } from "@/app/lib/action";
import { SubscriptionsForm, PlayerField } from "@/app/lib/definition";
import { Button } from "@/app/ui/button";

export default function EditSubcriptionForm({
  subscriptions,
  players,
}: {
  subscriptions: SubscriptionsForm;
  players: PlayerField[];
}) {
  const initialState = { message: "", errors: {} };
  const updateSubcriptionWithId = UpdateSubscription.bind(
    null,
    subscriptions.id
  );
  const [state, dispatch] = useFormState(updateSubcriptionWithId, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="player" className="mb-2 block text-sm font-medium">
            Choose Player
          </label>
          <div className="relative">
            <select
              id="player"
              name="playerId"
              className="peer block w-full cursor-pointer rounded-md"
              defaultValue={subscriptions.user_id}
              aria-describedby="customer-error"
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

          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.playerId &&
              state.errors.playerId.map((error: string) => (
                <p key={error} className="mt-2 text-sm text-red-500">
                  {error}
                </p>
              ))}
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
              choose an amount
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  defaultValue={subscriptions.amount}
                  step="0.01"
                  placeholder="Enter amount"
                  className="peer block w-full rounded-md border"
                  aria-describedby="amount-error"
                />
              </div>
            </div>

            <div id="amount-error" aria-live="polite" aria-atomic="true">
              {state.errors?.amount &&
                state.errors.amount.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
            </div>

            <fieldset>
              <legend className="mb-2 block text-sm font-medium">
                Set the status
              </legend>
              <div className="rounded-md border border-gray-50">
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      id="active"
                      name="status"
                      type="radio"
                      value="active"
                      defaultChecked={subscriptions.status === "active"}
                      className="h-4 w-4"
                    />
                    <label
                      htmlFor="active"
                      className="ml-2 flex cursor-pointer items-center"
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
                      defaultChecked={subscriptions.status === "active"}
                      className="h-4 w-4"
                    />
                    <label
                      htmlFor="cancelled"
                      className="ml-2 flex cursor-pointer items-center"
                    >
                      cancelled
                    </label>
                  </div>
                </div>
              </div>

              <div id="status-error" aria-live="polite" aria-atomic="true">
                {state.errors?.status &&
                  state.errors.status.map((error: string) => (
                    <p key={error}>{error}</p>
                  ))}
              </div>
            </fieldset>

            <div aria-live="polite" aria-atomic="true">
              {state.errors ? (
                <p className="my-2 text-sm text-red-500">{state.message}</p>
              ) : null}
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <Link
              href="/dashboard/subscribers/"
              className="flex h-10 items-center rounded-lg"
            >
              Cancel
            </Link>
            <Button type="submit">Edit</Button>
          </div>
        </div>
      </div>
    </form>
  );
}
