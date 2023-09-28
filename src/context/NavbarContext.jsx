import { createContext, useState } from "react";

// form error context
export const NavbarContext = createContext(null);
export default function NavbarProvider({ children }) {
  // add state
  const [isVisible, setisVisible] = useState(false);
  return (
    <NavbarContext.Provider value={{ isVisible, setisVisible }}>
      {children}
    </NavbarContext.Provider>
  );
}
