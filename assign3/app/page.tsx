"use client";

import React, { useActionState } from "react";
import { submitForm } from "./form/actions";

type InitialState = {
  success: boolean;
  error: boolean;
  message: string;
};

const initialState: InitialState = {
  success: false,
  error: false,
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-stone-900 shadow-sm outline-none transition placeholder:text-stone-300 focus:border-ink focus:ring-4 focus:ring-ink/10";

const HomePage = () => {
  const [state, formAction, isPending] = useActionState(submitForm, initialState);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8">
      <div className="pointer-events-none absolute -left-24 -top-16 h-80 w-80 rounded-full bg-[#d7e4d4] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[#f3ddc4] blur-3xl" />

      <section className="relative w-full max-w-[440px]">
        <div className="overflow-hidden rounded-[28px] bg-card shadow-[0_30px_80px_-36px_rgba(48,36,24,0.55)] ring-1 ring-stone-900/8">
          <div className="h-1.5 bg-gradient-to-r from-ink via-[#6b8f71] to-[#c4a574]" />

          <div className="px-8 pt-7 pb-7 sm:px-10">
            <div className="mb-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-linen shadow-lg shadow-ink/20">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 21v-1.5A3.5 3.5 0 0 0 12.5 16h-5A3.5 3.5 0 0 0 4 19.5V21"
                  />
                  <circle cx="10" cy="8" r="3.25" />
                  <path strokeLinecap="round" d="M19 8v6M16 11h6" />
                </svg>
              </div>
              <h1 className="text-[1.7rem] font-semibold tracking-tight text-stone-900">
                Create your account
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                Tell us who you are. Your password needs at least 6 characters.
              </p>
            </div>

            <form action={formAction} className="space-y-3.5">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-stone-700"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Ada"
                    className={fieldClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-stone-700"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Lovelace"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="ada@example.com"
                  className={fieldClass}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-stone-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className={fieldClass}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-sm font-medium text-stone-700"
                >
                  Confirm password
                </label>
                <input
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className={fieldClass}
                />
              </div>

              {state.message && (
                <p
                  role="status"
                  className={`rounded-xl px-3.5 py-3 text-sm leading-relaxed ${
                    state.success
                      ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                      : "bg-rose-50 text-rose-800 ring-1 ring-rose-200"
                  }`}
                >
                  {state.message}
                </p>
              )}

              <button
                className="mt-2 flex w-full items-center justify-center rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-linen shadow-lg shadow-ink/20 transition hover:bg-[#173028] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/25 disabled:cursor-not-allowed disabled:opacity-70"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Submitting…" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
