import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Blog from "./Pages/Blog/Blog";
import Post from "./Pages/Blog/Slug/Post";
import Home from "./Pages/Home/Home";
import { Toaster } from "react-hot-toast";
import AboutUs from "./Pages/About Us/AboutUs";
import Contact from "./Pages/Contact/Contact";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import Profile from "./Pages/Profile/Profile";
import Slug from "./Pages/Profile/Slug/Slug";

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: { background: "#333", color: "#fff" },
        }}
      />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Profile />} />
          <Route path="/portfolio/:slug" element={<Slug />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
