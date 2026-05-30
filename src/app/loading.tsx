export default function Loading() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="animate-pulse">

        <div className="mb-6 h-72 rounded-3xl bg-zinc-900" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-44 rounded-3xl bg-zinc-900"
            />
          ))}
        </div>

      </div>
    </div>
  );
}