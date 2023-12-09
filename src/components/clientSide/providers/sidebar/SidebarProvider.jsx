import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export default function SidebarProvider({children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  )
}
// Make useSidebarContext Hook to easily use our context throughout the application
export function useSidebarContext() {
  return useContext(SidebarContext);
}