import { iLibraryType } from "@/type";
import Image from "next/image";
import Link from "next/link";

interface iLibrary {
  library: iLibraryType;
}

export default function Library({ library }: iLibrary) {
  return (
    <Link
      href={`/librarydetails/${library.id}`}
      className="block overflow-hidden rounded-xl border border-zinc-800 bg-[#0b0c0e] transition-colors hover:border-zinc-600"
    >
      <div className="relative h-48 w-full">
        <Image
          src={library.image}
          alt={library.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <div className="mb-3 flex gap-2">
          {library.muscleGroups.map((group, index) => (
            <span
              key={index}
              className="rounded-full bg-lime-400 px-2 py-1 text-xs font-bold text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-bold uppercase text-white">
          {library.name}
        </h2>

        <p className="mb-3 text-sm text-zinc-400">{library.equipment}</p>

        <div className="mb-3 border-t border-zinc-700"></div>

        <div className="flex items-center justify-between text-sm text-zinc-300">
          <span>⏱ {library.duration} min</span>
          <span>🔥 {library.caloriesBurned} kcal</span>
          <span>⭐ {library.rating}</span>
        </div>
      </div>
    </Link>
  );
}
