import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "../Theme/ThemeProvider";
import Header from "./Header/Header";
import Footer from "./Fotter/Footer";
import RouteLoader from "../component/common/RouterLoader/RouteLoader";
import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
import { useEffect } from "react";

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    // <AuthDialogProvider>
    //   <SessionProvider>
    <ThemeProvider>
      <RouteLoader />
      <ScrollToTop />
      <div className="font-manrope">
        <Header />
        <main className="min-h-[80vh]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
    //   </SessionProvider>
    // </AuthDialogProvider>
  );
}
