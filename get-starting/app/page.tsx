  export default async function Home() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
  console.log(data);
  return (
    <div> {data.map((post: any) => (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ))} 
    </div>
  );
}

