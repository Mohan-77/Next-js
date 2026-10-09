'use client'
import Link from 'next/link'
import { useActionState } from 'react'
import { createTodoAction } from '../actions/create'

export default function NewTodo() {
    const [state, formAction] = useActionState(createTodoAction, null);
    return (
        <main className="mx-auto flex w-full max-w-xl flex-col px-5 py-12 sm:py-20">
            <Link href="/" className="mb-8 text-sm text-stone-500 transition hover:text-stone-900">
                ← Back to list
            </Link>

            <div className="rounded-3xl bg-white p-6 shadow-[0_1px_2px_rgba(28,25,21,0.05)] ring-1 ring-stone-200/80 sm:p-8">
                <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500 uppercase">New</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">Add a todo</h1>
                <p className="mt-2 text-sm text-stone-500">Keep it short. One clear next step.</p>

                <form action={formAction} className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-stone-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="What needs doing?"
                            className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:bg-white"
                            required
                            maxLength={200}
                            autoFocus
                        />
                        <p className="mt-2 text-xs text-stone-400">200 characters at most</p>
                        {state?.error && (
                            <p className="mt-2 text-sm text-rose-700">{state.error}</p>
                        )}
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="flex-1 rounded-full bg-stone-900 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
                        >
                            Save todo
                        </button>
                        <Link
                            href="/"
                            className="rounded-full px-5 py-3 text-sm font-medium text-stone-600 ring-1 ring-stone-200 transition hover:bg-stone-50"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    )
}
