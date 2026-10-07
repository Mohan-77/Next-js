'use client';
import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl font-semibold">Count: {count}</h2>
            <button className="rounded bg-blue-600 px-4 py-2 text-white" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="rounded bg-blue-600 px-4 py-2 text-white" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="rounded bg-blue-600 px-4 py-2 text-white" onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}