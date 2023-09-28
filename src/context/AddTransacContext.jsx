import { createContext, useState } from "react";

// add transaction context
export const AddTransContext = createContext(null);
export default function AddTransProvider({ children }) {
  // add state
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AddTransContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AddTransContext.Provider>
  );
}
