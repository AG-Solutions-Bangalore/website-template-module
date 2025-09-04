import React from "react";
import BuildAmazing from "./BuildAmazing/BuildAmazing";
import Counter from "./Counter/Counter";
import Hero from "./Hero/Hero";
import PreferredPlan from "./PreferredPlan/PreferredPlan";
import FAQ from "./FAQ/FAQ";
import WorkGrow from "./WorkGrow/WorkGrow";
// import Services from "./Services/Services";
// import Features from "./Features/Features";
// import ProductDoc from "./ProductDoc/ProductDoc";
// import Plan from "./Plans/Plans";

// import Info from "./Info/Info";
// import Partners from "./Partners/Partners";

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = "Sustainable";
  }, []);

  return (
    <main>
      <Hero />
      <BuildAmazing isSpace={true} />
      <WorkGrow />
      <PreferredPlan />
      <Counter />
      <FAQ />
      {/* <Services />
      <Features />
      <ProductDoc />
      <Plan />
     
      <Info />
      <Partners /> */}
    </main>
  );
};

export default Home;
