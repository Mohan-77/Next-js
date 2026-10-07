'use client';

import { createProduct } from '../../actions/create-product';

// revalidatePath
export default function NewProductPage() {
  return (
    <form action={createProduct}>
      <input name="title" placeholder="Product name" />
      <button type="submit">Add</button>
    </form>
  );
}
