import { CardsContext } from "@/context/CardContext";
import { iLibraryType } from "@/type";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import DltBtnTwo from "./DltBtnTwo";
import MarkBtn from "./MarkBtn";

export default function DataOne() {
  const { addToSaved } = useContext(CardsContext);

  if (addToSaved.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto border border-dashed border-white/10 rounded-2xl py-20 px-4 flex flex-col items-center justify-center text-center">
        <h3 className="text-white font-bold text-lg sm:text-xl uppercase tracking-wide">
          Nothing Here Yet
        </h3>
        <p className="text-gray-400 text-sm mt-2 max-w-sm">
          Browse the library and add a lift to get today moving.
        </p>
        <Link
          href="/"
          className="mt-5 bg-lime-400 text-black text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-lime-300 transition"
        >
          Go to workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-6xl mx-auto">
      {addToSaved.map((cardItem: iLibraryType) => (
        <div
          key={cardItem.id}
          className="flex items-center justify-between gap-3 bg-[#12141a] border border-white/5 rounded-xl p-3 sm:p-4 w-full"
        >
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0">
              <Image
                src={cardItem.image}
                alt={cardItem.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-white font-semibold text-sm sm:text-base uppercase tracking-wide truncate">
                {cardItem.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm truncate">
                {cardItem.equipment}
              </p>
              <div className="flex items-center gap-3 mt-1 text-xs sm:text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-lime-400" />
                  {cardItem.duration} min
                </span>
                <span className="flex items-center gap-1">
                  <Flame size={14} className="text-lime-400" />
                  {cardItem.caloriesBurned} kcal
                </span>
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-lime-400 fill-lime-400" />
                  {cardItem.rating}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/librarydetails/${cardItem.id}`}
              className="hidden sm:inline-block text-white text-xs sm:text-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-white/5"
            >
              View Details
            </Link>
            <MarkBtn />
            <DltBtnTwo cardItem={cardItem} />
          </div>
        </div>
      ))}
    </div>
  );
}
