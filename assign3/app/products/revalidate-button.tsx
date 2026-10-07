'use client';

import { revalidateProduct } from "../actions/revalidate-product";

export default function RevalidatedButton() {
    return (
        <button
      className="bg-blue-500 text-white p-2 rounded-md"
      onClick={() => revalidateProduct()}
    >
      Revalidate
    </button>
    )
}