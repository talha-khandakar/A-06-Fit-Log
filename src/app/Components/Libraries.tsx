import { iLibraryType } from "@/type";
import Library from "./Library";

export default async function Libraries() {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();

  return (
    <div className="bg-[#0b0c0e] min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-white text-3xl font-bold uppercase">The Library</h1>
        <p className="text-zinc-400 mb-8">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((library: iLibraryType) => (
            <Library key={library.id} library={library} />
          ))}
        </div>
      </div>
    </div>
  );
}
