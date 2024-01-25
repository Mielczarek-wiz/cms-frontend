"use client";
import { useSidebarContext } from "@/components/clientSide/providers/sidebar/SidebarProvider";

export default function Sidebar({ children }) {
  const { isOpen } = useSidebarContext();

  if (!isOpen) return null;
  return (
    <aside className="fixed z-50 w-full h-full bg-white shadow-sm top-16 shadow-black lg:hidden">
      <div>
        <div>{children}</div>
      </div>
    </aside>
  );
}
