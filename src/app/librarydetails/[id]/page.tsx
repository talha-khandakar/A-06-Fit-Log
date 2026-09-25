import { iLibraryType } from "@/type";
import Image from "next/image";

export default async function LibraryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const library: iLibraryType = await res.json();

  return (
    <div className="bg-[#0b0c0e] min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-full h-72 md:h-full relative rounded-xl overflow-hidden">
            <Image
              src={library.image}
              alt={library.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-white text-3xl font-bold uppercase">
              {library.name}
            </h1>

            <p className="text-zinc-400 mt-2">{library.description}</p>

            <div className="flex gap-2 mt-4">
              {library.muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="bg-lime-400 text-black text-xs font-bold px-2 py-1 rounded-full"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="bg-[#111318] border border-zinc-800 rounded-xl mt-6 divide-y divide-zinc-800">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-zinc-500 text-xs uppercase">
                  Equipment
                </span>
                <span className="text-white text-sm">{library.equipment}</span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-zinc-500 text-xs uppercase">
                  Difficulty
                </span>
                <span className="text-white text-sm">{library.difficulty}</span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-zinc-500 text-xs uppercase">Sets</span>
                <span className="text-white text-sm">{library.sets}</span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-zinc-500 text-xs uppercase">Reps</span>
                <span className="text-white text-sm">{library.reps}</span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-zinc-500 text-xs uppercase">
                  Duration
                </span>
                <span className="text-white text-sm">
                  {library.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-zinc-500 text-xs uppercase">
                  Calories
                </span>
                <span className="text-white text-sm">
                  {library.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-zinc-500 text-xs uppercase">Rating</span>
                <span className="text-white text-sm">{library.rating}</span>
              </div>
            </div>

            <h2 className="text-white font-bold mt-6 mb-3">Instructions</h2>
            <ol className="text-zinc-300 text-sm space-y-2 list-decimal list-inside">
              {library.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <div className="flex flex-wrap gap-3 mt-6">
              <button className="bg-lime-400 text-black font-bold text-sm px-4 py-2 rounded-lg">
                + Add to today&apos;s plan
              </button>
              <button className="border border-zinc-700 text-white text-sm px-4 py-2 rounded-lg">
                🔖 Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
