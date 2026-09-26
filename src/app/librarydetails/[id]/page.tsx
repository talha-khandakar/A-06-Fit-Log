import PlanBtn from "@/app/Components/PlanBtn";
import SaveBtn from "@/app/Components/SaveBtn";
import { iLibraryType } from "@/type";
import Image from "next/image";

export default async function LibraryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);

  const library: iLibraryType = await res.json();

  return (
    <div className="min-h-screen bg-[#0b0c0e]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="relative h-72 w-full overflow-hidden rounded-xl md:h-full">
            <Image
              src={library.image}
              alt={library.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold uppercase text-white">
              {library.name}
            </h1>

            <p className="mt-2 text-zinc-400">{library.description}</p>

            <div className="mt-4 flex gap-2">
              {library.muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="rounded-full bg-lime-400 px-2 py-1 text-xs font-bold text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="mt-6 divide-y divide-zinc-800 rounded-xl border border-zinc-800 bg-[#111318]">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs uppercase text-zinc-500">
                  Equipment
                </span>
                <span className="text-sm text-white">{library.equipment}</span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs uppercase text-zinc-500">
                  Difficulty
                </span>
                <span className="text-sm text-white">{library.difficulty}</span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs uppercase text-zinc-500">Sets</span>
                <span className="text-sm text-white">{library.sets}</span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs uppercase text-zinc-500">Reps</span>
                <span className="text-sm text-white">{library.reps}</span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs uppercase text-zinc-500">
                  Duration
                </span>
                <span className="text-sm text-white">
                  {library.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs uppercase text-zinc-500">
                  Calories
                </span>
                <span className="text-sm text-white">
                  {library.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs uppercase text-zinc-500">Rating</span>
                <span className="text-sm text-white">{library.rating}</span>
              </div>
            </div>

            <h2 className="mb-3 mt-6 font-bold text-white">Instructions</h2>

            <ol className="list-inside list-decimal space-y-2 text-sm text-zinc-300">
              {library.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              <PlanBtn library={library} />
              <SaveBtn library={library} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
