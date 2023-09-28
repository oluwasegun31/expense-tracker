import { createContext, useState } from "react";

// form error context
export const FormErrorContext = createContext(null);
export default function FormErrorProvider({ children }) {
  // add state
  const [isError, setIsError] = useState(false);
  return (
    <FormErrorContext.Provider value={{ isError, setIsError }}>
      {children}
    </FormErrorContext.Provider>
  );
}
