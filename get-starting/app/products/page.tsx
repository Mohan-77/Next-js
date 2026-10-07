export default async function ProductsPage() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    return (
        <div>
            <h1>Products</h1>

            <ul>
                {data.products.slice(0, 5).map((product: any) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
}