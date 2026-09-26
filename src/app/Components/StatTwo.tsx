import { CardsContext } from "@/context/CardContext";
import { useContext } from "react";

export default function StatOne() {
  const { addToSaved } = useContext(CardsContext);

  const totalMinutes = addToSaved.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );

  const totalCalories = addToSaved.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  return (
    <div className="rounded-2xl bg-[#14151c] border border-white/5 p-6 md:p-8">
      <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
        <div className="pb-4 sm:pb-0 sm:pr-6">
          <p className="text-xs font-normal text-gray-400 mb-1 tracking-wide">
            Exercises
          </p>

          <p className="text-3xl md:text-4xl font-extrabold text-[#c8ff00]">
            {addToSaved.length}
          </p>
        </div>

        <div className="py-4 sm:py-0 sm:px-6">
          <p className="text-xs font-normal text-gray-400 mb-1 tracking-wide">
            Minutes
          </p>

          <p className="text-3xl md:text-4xl font-extrabold text-white">
            {totalMinutes}
          </p>
        </div>

        <div className="pt-4 sm:pt-0 sm:pl-6">
          <p className="text-xs font-normal text-gray-400 mb-1 tracking-wide">
            Calories
          </p>

          <p className="text-3xl md:text-4xl font-extrabold text-white">
            {totalCalories}
          </p>
        </div>
      </div>
    </div>
  );
}
