import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Features from "./Features/Features";
import ProductDoc from "./ProductDoc/ProductDoc";
import Plan from "./Plans/Plans";
import FAQ from "./FAQ/FAQ";
import Info from "./Info/Info";
import Partners from "./Partners/Partners";

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = "SaasCandy";
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <ProductDoc />
      <Plan />
      <FAQ />
      <Info />
      <Partners />
    </main>
  );
};

export default Home;
