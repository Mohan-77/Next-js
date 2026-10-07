import RevalidatedButton from "./revalidate-button";

// force-cache (Static Caching)
export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "force-cache",
  });
  await res.json();
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>🕒 Cached at: {timestamp}</p>
      <RevalidatedButton />
    </div>
  );
}
