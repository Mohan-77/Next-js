import Counter from "../components/Counter";

export default function CounterPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-semibold">Counter Exercise</h1>
            <Counter />
        </div>
    );
}