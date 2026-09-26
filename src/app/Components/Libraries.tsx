import { iLibraryType } from "@/type";
import Library from "./Library";

export default async function Libraries() {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

  const data: iLibraryType[] = await res.json();

  return (
    <div
      id="library"
      className="min-h-screen scroll-mt-20 bg-[#0b0c0e] px-6 py-10"
    >
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold uppercase text-white">The Library</h1>

        <p className="mb-8 text-zinc-400">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((library) => (
            <Library key={library.id} library={library} />
          ))}
        </div>
      </div>
    </div>
  );
}
