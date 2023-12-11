import HeaderDash from "@/components/dashboardSide/HeaderDash";

export default function Layout({ children }) {
    return (
    <>
    <HeaderDash />
        {children}
    </>

    )
  }