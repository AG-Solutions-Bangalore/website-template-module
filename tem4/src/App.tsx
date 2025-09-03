import { Route, Routes } from "react-router-dom";
import ServiceDetail from "./component/ServiceDetail/ServiceDetail";
import MainLayout from "./layouts/MainLayout";
import SigninPage from "./Pages/Auth/SigninPage/SigninPage";
import Blog from "./Pages/Blog/Blog";
import Post from "./Pages/Blog/Slug/Post";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Pricing from "./Pages/Pricing/Pricing";
import Profile from "./Pages/Profile/Profile";
import Service from "./Pages/Service/Service";
import SignupPage from "./Pages/Auth/SignupPage/SignupPage";
import ForgotPasswordPage from "./Pages/Auth/ForgotPasswordPage/ForgotPasswordPage";
import { Toaster } from "react-hot-toast";

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
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Profile />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
