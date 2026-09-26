"use client";

import { CardsContext } from "@/context/CardContext";
import { iLibraryType } from "@/type";
import { useContext } from "react";
import { toast } from "react-toastify";

interface iPlanBtnT {
  library: iLibraryType;
}

export default function PlanBtn({ library }: iPlanBtnT) {
  const { addToPlan, setAddToPlan } = useContext(CardsContext);

  const handleAddPlan = () => {
    const alreadyAdded = addToPlan.find((item) => item.id === library.id);

    if (alreadyAdded) {
      toast.info("Already added to plan");
    } else {
      setAddToPlan([...addToPlan, library]);
      toast.success("Added to plan");
    }
  };

  return (
    <div>
      <button
        onClick={handleAddPlan}
        className="bg-lime-400 text-black font-bold text-sm px-4 py-2 rounded-lg transition hover:bg-lime-300 active:scale-95"
      >
        + Add to today&apos;s plan
      </button>
    </div>
  );
}
