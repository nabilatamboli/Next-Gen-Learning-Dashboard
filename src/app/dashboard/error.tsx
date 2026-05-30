"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="mb-6 text-zinc-400">
          Failed to load dashboard data.
        </p>

        <button
          onClick={() => reset()}
          className="rounded-xl bg-violet-600 px-5 py-3"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}