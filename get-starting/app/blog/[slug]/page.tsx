import Link from "next/link";
import { fetchPostBySlug } from "./fetchPostBySlug";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://yourapp.com/blog/${slug}`,
      siteName: "My Blog",
      images: [
        {
          url: post.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  return (
    <article className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-6 py-10">
      <Link href="/blog" className="text-sm underline">
        Back to posts
      </Link>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
