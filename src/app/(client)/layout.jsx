import Footer from "@/components/clientSide/footer/Footer";
import Header from "@/components/clientSide/header/Header";
import Menu from "@/components/clientSide/menu/Menu";
import Sidebar from "@/components/clientSide/sidebar/Sidebar";
import AllAppProviders from "@/components/clientSide/providers/AllAppProviders";

export default function Layout({ children }) {
  return (
    <AllAppProviders>
      <Header />
      <Sidebar>
        <Menu />
      </Sidebar>
      <div className="flex flex-col items-center justify-center bg-white">
        <main className="w-screen h-fit">{children}</main>
        <Footer />
      </div>
    </AllAppProviders>
  );
}
