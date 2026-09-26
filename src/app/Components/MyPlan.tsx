"use client";

import { CardsContext } from "@/context/CardContext";
import { useContext, useState } from "react";
import DataOne from "./DataOne";
import DataTwo from "./DataTwo";
import StatOne from "./StatOne";
import StatTwo from "./StatTwo";

type SortType = "Duration" | "Calories" | "Rating";

export default function MyPlan() {
  const { addToPlan, addToSaved } = useContext(CardsContext);

  const [button, setButton] = useState<"Today's plan" | "Saved">(
    "Today's plan",
  );

  const [sortBy, setSortBy] = useState<SortType>("Duration");

  const sortData = (data: typeof addToPlan) => {
    return [...data].sort((a, b) => {
      if (sortBy === "Duration") {
        return b.duration - a.duration;
      }

      if (sortBy === "Calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  };

  const sortedPlan = sortData(addToPlan);
  const sortedSaved = sortData(addToSaved);

  return (
    <div className="min-h-screen bg-[#0b0b0f] px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          MY PLAN
        </h1>

        <p className="mt-1 text-sm text-gray-400 md:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="mt-6">
          {button === "Today's plan" ? <StatOne /> : <StatTwo />}
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full items-center gap-1 rounded-full bg-[#161619] p-1 sm:w-auto">
            <button
              onClick={() => setButton("Today's plan")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-medium sm:flex-none ${
                button === "Today's plan"
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setButton("Saved")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-medium sm:flex-none ${
                button === "Saved"
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex w-full items-center justify-between gap-2 sm:w-auto">
            <span className="text-sm text-gray-400">Sort By</span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
              className="select select-sm w-32 rounded-full border border-white/10 bg-[#1c1c22] text-white"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          {button === "Today's plan" ? (
            <DataOne data={sortedPlan} />
          ) : (
            <DataTwo data={sortedSaved} />
          )}
        </div>
      </div>
    </div>
  );
}
