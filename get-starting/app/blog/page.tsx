import Link from "next/link";
import { fetchPosts } from "./[slug]/fetchPostBySlug";

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-6 py-10">
      <h1 className="text-2xl font-bold">Blog</h1>
      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="block rounded-lg border border-foreground/15 px-4 py-3 hover:bg-foreground/5"
            >
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="mt-1 text-sm opacity-80">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
