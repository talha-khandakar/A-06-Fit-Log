"use client";
import { CardsContext } from "@/context/CardContext";
import { iLibraryType } from "@/type";
import { X } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface iDltType {
  cardItem: iLibraryType;
}
export default function DltBtn({ cardItem }: iDltType) {
  const { addToPlan, setAddToPlan } = useContext(CardsContext);
  const handleDelete = () => {
    const remaining = addToPlan.filter((d) => d.id !== cardItem.id);
    setAddToPlan(remaining);
    toast.success(`Deleted Successfully`);
  };
  return (
    <div>
      <button
        onClick={handleDelete}
        className="text-gray-400 hover:text-white p-1"
      >
        <X size={16} />
      </button>
    </div>
  );
}
