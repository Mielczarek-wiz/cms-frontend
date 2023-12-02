'use client'
import SidebarProvider from "./sidebar/SidebarProvider"

export default function AllAppProviders({children}) {
  return (
    <SidebarProvider>
       {children} 
    </SidebarProvider>
  )
}
