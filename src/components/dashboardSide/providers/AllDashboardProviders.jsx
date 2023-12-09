'use client'
import ReduxStoreProvider from "./ReduxStoreProvider/ReduxStoreProvider";

export default function AllDashboardProviders({ children }) {
  return <ReduxStoreProvider>{children}</ReduxStoreProvider>;
}
