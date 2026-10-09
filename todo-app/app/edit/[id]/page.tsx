import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';
import { fetchTodoById } from '../../lib/todos';
import { updateTodoAction } from '../../actions/update';

interface EditTodoPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditTodoPage({ params }: EditTodoPageProps) {
  return (
    <Suspense fallback={<main className="mx-auto max-w-xl px-5 py-20 text-sm text-stone-500">Loading todo...</main>}>
      <EditTodoForm params={params} />
    </Suspense>
  );
}

async function EditTodoForm({ params }: EditTodoPageProps) {
  await connection();
  const { id } = await params;
  const todo = await fetchTodoById(id);

  if (!todo) {
    notFound();
  }

  const created = new Date(todo.createdAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <main className="mx-auto flex w-full max-w-xl flex-col px-5 py-12 sm:py-20">
      <Link href="/" className="mb-8 text-sm text-stone-500 transition hover:text-stone-900">
        ← Back to list
      </Link>

      <div className="rounded-3xl bg-white p-6 shadow-[0_1px_2px_rgba(28,25,21,0.05)] ring-1 ring-stone-200/80 sm:p-8">
        <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500 uppercase">Edit</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">Change this todo</h1>

        <form action={updateTodoAction} className="mt-8 space-y-6">
          <input type="hidden" name="id" value={todo._id} />

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-stone-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={todo.title}
              placeholder="What needs doing?"
              className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:bg-white"
              required
              maxLength={200}
              autoFocus
            />
            <p className="mt-2 text-xs text-stone-400">200 characters at most</p>
          </div>

          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-stone-50 px-4 py-3">
              <dt className="text-xs text-stone-400">Status</dt>
              <dd className="mt-1 font-medium text-stone-800">{todo.completed ? 'Completed' : 'Open'}</dd>
            </div>
            <div className="rounded-2xl bg-stone-50 px-4 py-3">
              <dt className="text-xs text-stone-400">Created</dt>
              <dd className="mt-1 font-medium text-stone-800">{created}</dd>
            </div>
            {todo.updatedAt && (
              <div className="col-span-2 rounded-2xl bg-stone-50 px-4 py-3">
                <dt className="text-xs text-stone-400">Last updated</dt>
                <dd className="mt-1 font-medium text-stone-800">
                  {new Date(todo.updatedAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </dd>
              </div>
            )}
          </dl>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 rounded-full bg-stone-900 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Save changes
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
  );
}
