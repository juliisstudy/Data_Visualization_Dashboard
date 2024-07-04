"use client";

import { error } from "console";
import Link from "next/link";
import { useFormState } from "react-dom";
import { UpdateSubscription } from "@/app/lib/action";
import { SubscriptionsForm, PlayerField } from "@/app/lib/definition";
import { ButtonUI } from "@/app/ui/button";
import { Title } from "@/app/ui/title";

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
      <Title title="Edit Subscriptions" />

      <div className="rounded-xs bg-white bg-opacity-70 text-slate-500 p-3 w-full md:p-6 md:w-1/2 mt-3 dark:bg-slate-900">
        <div className="mb-4">
          <label htmlFor="player" className="mb-2 block text-lg font-medium">
            Choose a Player
          </label>
          <div className="relative">
            <select
              id="player"
              name="playerId"
              className="peer block w-full p-4 cursor-pointer rounded-sm mt-7 "
              defaultValue={subscriptions.user_id}
              aria-describedby="customer-error"
            >
              <option value="" disabled className="bg-white-50">
                Select a player
              </option>
              {players.map((player, index) => (
                <option key={index} value={player.id}>
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
            <label
              htmlFor="amount"
              className="mb-2 block text-lg font-medium mt-8"
            >
              Enter an amount
            </label>
            <div className="relative mt-5 rounded-sm ">
              <div className="relative ">
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  defaultValue={subscriptions.amount}
                  step="0.01"
                  placeholder="Enter amount"
                  data-lpignore="true"
                  className="peer block w-full rounded-sm p-3 border"
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
              <legend className="mb-2 block text-lg font-medium mt-7">
                Set the status
              </legend>
              <div className="rounded-md border border-gray-50 mt-5 dark:border-none">
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      id="active"
                      name="status"
                      type="radio"
                      value="active"
                      data-lpignore="true"
                      defaultChecked={subscriptions.status === "active"}
                      className="h-4 w-4"
                    />
                    <label
                      htmlFor="active"
                      className="ml-2 flex cursor-pointer items-center"
                    >
                      Subscribed
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="cancelled"
                      name="status"
                      type="radio"
                      value="cancelled"
                      data-lpignore="true"
                      defaultChecked={subscriptions.status === "active"}
                      className="h-4 w-4"
                    />
                    <label
                      htmlFor="cancelled"
                      className="ml-2 flex cursor-pointer items-center"
                    >
                      Cancelled
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
              className="flex h-10 items-center rounded-sm "
            >
              <ButtonUI className="bg-white border border-slate-200 text-slate-600 hover:text-white dark:bg-gray-400 dark:border-none">
                Cancel
              </ButtonUI>
            </Link>
            <ButtonUI type="submit">Edit</ButtonUI>
          </div>
        </div>
      </div>
    </form>
  );
}
