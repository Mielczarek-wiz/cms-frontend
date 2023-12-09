'use client'
import { useSidebarContext } from "@/components/clientSide/providers/sidebar/SidebarProvider";

export default function Sidebar({children}) {
  const {isOpen} = useSidebarContext()

  if(!isOpen) return null
  return (
    <aside className="fixed z-50 h-full bg-white shadow-sm w-72 top-20 shadow-black lg:hidden">
      <div>
        <div>
          {children}
        </div>
      </div>
    </aside>
  );
}
