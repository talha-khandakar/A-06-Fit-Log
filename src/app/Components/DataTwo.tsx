"use client";

import { iLibraryType } from "@/type";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DltBtnTwo from "./DltBtnTwo";
import MarkBtn from "./MarkBtn";

interface DataTwoProps {
  data: iLibraryType[];
}

export default function DataTwo({ data }: DataTwoProps) {
  if (data.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 px-4 py-20 text-center">
        <h3 className="text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
          Nothing Here Yet
        </h3>

        <p className="mt-2 max-w-sm text-gray-400">
          Browse the library and add a lift to get today moving.
        </p>

        <Link
          href="/"
          className="mt-5 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-lime-300"
        >
          Go to workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-3">
      {data.map((cardItem) => (
        <div
          key={cardItem.id}
          className="flex w-full items-center justify-between gap-3 rounded-xl border border-white/5 bg-[#12141a] p-3 sm:p-4"
        >
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
              <Image
                src={cardItem.image}
                alt={cardItem.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold uppercase tracking-wide text-white sm:text-base">
                {cardItem.title}
              </h3>

              <p className="truncate text-xs text-gray-400 sm:text-sm">
                {cardItem.equipment}
              </p>

              <div className="mt-1 flex items-center gap-3 text-xs text-gray-300 sm:text-sm">
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-lime-400" />
                  {cardItem.duration} min
                </span>

                <span className="flex items-center gap-1">
                  <Flame size={14} className="text-lime-400" />
                  {cardItem.caloriesBurned} kcal
                </span>

                <span className="flex items-center gap-1">
                  <Star size={14} className="fill-lime-400 text-lime-400" />
                  {cardItem.rating}
                </span>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={`/librarydetails/${cardItem.id}`}
              className="hidden rounded-full border border-white/20 px-3 py-1.5 text-xs text-white hover:bg-white/5 sm:inline-block sm:px-4 sm:py-2 sm:text-sm"
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
