export default async function LiveDataPage() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  const data = await res.json();

  const timestamp = new Date().toLocaleTimeString();

  return <p>🕐 Live fetched at: {timestamp}</p>;
}