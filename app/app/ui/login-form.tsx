"use client";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/action";
import { Button } from "@/components/ui/button";
export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch} className="">
      <div className="drop-shadow-md relative top-10 bg-white bg-opacity-70 rounded-md grid place-items-center mx-4 md:w-1/3 md:mx-auto md:relative">
        <div className="w-full p-4">
          <div>
            <label
              className="mt-2 mb-4 block text-sm font-medium text-gray-500"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border pl-2 py-4 border-gray-200"
                id="email"
                type="email"
                name="email"
                data-lpignore="true"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mt-4">
              <label className="mb-3 mt-5 block text-xs" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full pl-2 py-4 border border-gray-200"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  data-lpignore="true"
                  required
                  minLength={6}
                />
              </div>
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p>{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-1/4" aria-disabled={pending}>
      Login
    </Button>
  );
}
