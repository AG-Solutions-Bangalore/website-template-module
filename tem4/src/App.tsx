import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Pricing from "./Pages/Pricing/Pricing";
import Profile from "./Pages/Profile/Profile";
import Service from "./Pages/Service/Service";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Profile />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Service />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
