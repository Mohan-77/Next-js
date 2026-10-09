import { Suspense } from 'react';
import { connection } from 'next/server';
import { fetchTodos } from './lib/todos';
import { toggleTodo } from './actions/toggle';
import { deleteTodo } from './actions/delete';
import Link from 'next/link';

export default function Home() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-xl px-5 py-20 text-sm text-stone-500">Loading your list...</main>}>
      <TodoHome />
    </Suspense>
  );
}

async function TodoHome() {
  await connection();
  const todos = await fetchTodos();
  const done = todos.filter((todo) => todo.completed).length;
  const open = todos.length - done;
  const time = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  return (
    <main className="mx-auto flex w-full max-w-xl flex-col px-5 py-12 sm:py-20">
      <header className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500 uppercase">Today</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">Your list</h1>
          <p className="mt-2 text-sm text-stone-500">
            {todos.length === 0 ? 'A clear page' : open === 0 ? 'All caught up' : `${open} still open`}
            {todos.length > 0 && <span className="text-stone-400"> · {done} done</span>}
          </p>
        </div>
        <Link
          href="/new"
          className="shrink-0 rounded-full bg-stone-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-stone-700"
        >
          New todo
        </Link>
      </header>

      {todos.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-stone-300 bg-white/70 px-6 py-16 text-center">
          <p className="text-lg font-medium text-stone-800">Nothing on the list</p>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-stone-500">
            Add one small thing. You can check it off when it is done.
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="flex items-center gap-3 rounded-2xl bg-white px-3 py-3 shadow-[0_1px_2px_rgba(28,25,21,0.05)] ring-1 ring-stone-200/80"
            >
              <form action={toggleTodo.bind(null, todo._id)}>
                <button
                  type="submit"
                  aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
                  className={`grid h-7 w-7 place-items-center rounded-full border transition ${
                    todo.completed
                      ? 'border-emerald-800 bg-emerald-800 text-white'
                      : 'border-stone-300 bg-white text-transparent hover:border-stone-500'
                  }`}
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3.5 8.5 6.5 11.5 12.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>

              <span className={`min-w-0 flex-1 text-[15px] leading-6 ${todo.completed ? 'text-stone-400 line-through' : 'text-stone-800'}`}>
                {todo.title}
              </span>

              <div className="flex items-center gap-1">
                <Link
                  href={`/edit/${todo._id}`}
                  aria-label="Edit todo"
                  className="grid h-8 w-8 place-items-center rounded-full text-stone-500 transition hover:bg-stone-100 hover:text-stone-900"
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.5 3.5 12.5 6.5 5.5 13.5H2.5V10.5L9.5 3.5Z" strokeLinejoin="round" />
                  </svg>
                </Link>
                <form action={deleteTodo.bind(null, todo._id)}>
                  <button
                    type="submit"
                    aria-label="Delete todo"
                    className="grid h-8 w-8 place-items-center rounded-full text-stone-400 transition hover:bg-rose-50 hover:text-rose-700"
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3.5 4.5h9M6.5 4.5V3h3v1.5M5 4.5l.5 8h5l.5-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-8 text-xs text-stone-400">Updated {time}</p>
    </main>
  );
}
