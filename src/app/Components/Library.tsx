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
      className="bg-[#0b0c0e] rounded-xl overflow-hidden border border-zinc-800 block hover:border-zinc-600 transition-colors"
    >
      <div className="w-full h-48 relative">
        <Image
          src={library.image}
          alt={library.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-3">
          {library.muscleGroups.map((group, index) => (
            <span
              key={index}
              className="bg-lime-400 text-black text-xs font-bold px-2 py-1 rounded-full"
            >
              {group}
            </span>
          ))}
        </div>

        <h2 className="text-white text-lg font-bold uppercase">
          {library.name}
        </h2>

        <p className="text-zinc-400 text-sm mb-3">{library.equipment}</p>

        <div className="border-t border-zinc-700 mb-3"></div>

        <div className="flex items-center justify-between text-zinc-300 text-sm">
          <span>⏱ {library.duration} min</span>
          <span>🔥 {library.caloriesBurned} kcal</span>
          <span>⭐ {library.rating}</span>
        </div>
      </div>
    </Link>
  );
}
