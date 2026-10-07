export type BlogPost = {
  id: number;
  title: string;
  body: string;
  excerpt: string;
  ogImage: string;
};

type DummyPost = {
  id: number;
  title: string;
  body: string;
};

function toBlogPost(post: DummyPost): BlogPost {
  const excerpt =
    post.body.length > 140 ? `${post.body.slice(0, 140).trimEnd()}…` : post.body;

  return {
    id: post.id,
    title: post.title,
    body: post.body,
    excerpt,
    ogImage: `https://og-image.vercel.app/${encodeURIComponent(post.title)}.png?theme=light`,
  };
}

export async function fetchPosts(): Promise<BlogPost[]> {
  const res = await fetch("https://dummyjson.com/posts?limit=0");
  const data = await res.json();
  const posts: DummyPost[] = Array.isArray(data) ? data : (data.posts ?? []);
  return posts.map(toBlogPost);
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost> {
  const posts = await fetchPosts();
  const post = posts.find((item) => String(item.id) === slug);

  if (post) return post;

  return {
    id: 0,
    title: "Post Not Found",
    body: "This post does not exist.",
    excerpt: "This post does not exist.",
    ogImage: `https://og-image.vercel.app/${encodeURIComponent(slug || "post")}.png?theme=light`,
  };
}
