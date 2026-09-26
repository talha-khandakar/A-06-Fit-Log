import { createContext, ReactNode, useState } from "react";

export const CardsContext = createContext({});

export default function CardProvider({ children }: { children: ReactNode }) {
  const [addToPlan, setAddToPlan] = useState([]);
  const [addToSaved, setAddToSaved] = useState([]);

  const sharedData = {
    addToPlan,
    setAddToPlan,
    addToSaved,
    setAddToSaved,
  };

  return (
    <CardsContext.Provider value={sharedData}>{children}</CardsContext.Provider>
  );
}
