import HeroSub from "../../component/SharedComponent/HeroSub/HeroSub";
import PageMeta from "../../component/common/PageMeta/PageMeta";
import BuildAmazing from "../Home/BuildAmazing/BuildAmazing";
import Counter from "../Home/Counter/Counter";
import WorkGrow from "../Home/WorkGrow/WorkGrow";

const AboutUs = () => {
  return (
    <>
      <PageMeta
        title="About | Sustainable"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <HeroSub title="About Us" description="" />
      <Counter />
      <WorkGrow />
      <BuildAmazing isSpace={false} />
    </>
  );
};

export default AboutUs;
