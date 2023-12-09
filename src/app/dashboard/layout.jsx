import AllDashboardProviders from "@/components/dashboardSide/providers/AllDashboardProviders";

export default function Layout({ children }) {
    return (
    <AllDashboardProviders>
        {children}
    </AllDashboardProviders>

    )
  }