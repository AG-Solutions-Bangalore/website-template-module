import {
  Outlet,
  useLocation,
  useNavigationType,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "../Theme/ThemeProvider";
import Header from "./Header/Header";
import Footer from "./Fotter/Footer";
import RouteLoader from "../component/common/RouterLoader/RouteLoader";
import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
import { useEffect } from "react";
import Aoscompo from "../../utils/Aoscompo";

export default function MainLayout() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, navigationType]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a")) {
        const link = (target.closest("a") as HTMLAnchorElement).getAttribute(
          "href"
        );
        if (link === pathname) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate(link!);
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, navigate]);

  return (
    <ThemeProvider>
      <RouteLoader />
      <Aoscompo>
        <ScrollToTop />
        <div>
          <Header />
          <main className="min-h-[80vh]">
            <Outlet />
          </main>
          <Footer />
        </div>
      </Aoscompo>
    </ThemeProvider>
  );
}
