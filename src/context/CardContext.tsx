"use client";

import { iLibraryType } from "@/type";
import { createContext, ReactNode, useState } from "react";

interface CardsContextType {
  addToPlan: iLibraryType[];
  setAddToPlan: React.Dispatch<React.SetStateAction<iLibraryType[]>>;
  addToSaved: iLibraryType[];
  setAddToSaved: React.Dispatch<React.SetStateAction<iLibraryType[]>>;
}

interface CardProviderProps {
  children: ReactNode;
}

export const CardsContext = createContext<CardsContextType>({
  addToPlan: [],
  setAddToPlan: () => {},
  addToSaved: [],
  setAddToSaved: () => {},
});

export default function CardProvider({ children }: CardProviderProps) {
  const [addToPlan, setAddToPlan] = useState<iLibraryType[]>([]);
  const [addToSaved, setAddToSaved] = useState<iLibraryType[]>([]);

  return (
    <CardsContext.Provider
      value={{
        addToPlan,
        setAddToPlan,
        addToSaved,
        setAddToSaved,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}
