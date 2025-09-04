import { Route, Routes } from "react-router-dom";
// import ServiceDetail from "./component/ServiceDetail/ServiceDetail";
import MainLayout from "./layouts/MainLayout";
// import SigninPage from "./Pages/Auth/SigninPage/SigninPage";
import Blog from "./Pages/Blog/Blog";
import Post from "./Pages/Blog/Slug/Post";
// import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
// import Pricing from "./Pages/Pricing/Pricing";
// import Profile from "./Pages/Profile/Profile";
// import Service from "./Pages/Service/Service";
// import SignupPage from "./Pages/Auth/SignupPage/SignupPage";
// import ForgotPasswordPage from "./Pages/Auth/ForgotPasswordPage/ForgotPasswordPage";
import { Toaster } from "react-hot-toast";
import AboutUs from "./Pages/About Us/AboutUs";
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
          {/* <Route path="/signin" element={<SigninPage />} />
          {/* <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
         
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
