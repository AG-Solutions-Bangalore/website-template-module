import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

import MainLayout from "./layouts/MainLayout.jsx";

import { Toaster } from "sonner";
import SuspenseLoader from "./components/loader/SuspenseLoader.jsx";
import Navbar from "./pages/navbar/Navbar.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";


const Home = lazy(() => import("./pages/home/Home"));




const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router >
        <Toaster richColors position="bottom-right" />
     
         
          <ScrollToTop />
        
          
          <MainLayout>
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<SuspenseLoader/>}>
          <Home />
        </Suspense>
      }
    />
 
  </Routes>
  <Routes>
    <Route
      path="/navbar"
      element={
        <Suspense fallback={<SuspenseLoader/>}>
          <Navbar />
        </Suspense>
      }
    />
 
  </Routes>
  <Routes>
    <Route
      path="/home-page"
      element={
        <Suspense fallback={<SuspenseLoader/>}>
          <HomePage />
        </Suspense>
      }
    />
 
  </Routes>
</MainLayout>

     
      </Router>
    </QueryClientProvider>
  );
}

export default App;