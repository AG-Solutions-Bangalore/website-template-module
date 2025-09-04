import HeroSub from "../../component/SharedComponent/HeroSub/HeroSub";
import Plan from "../Plans/Plans";
import PageMeta from "../../component/common/PageMeta/PageMeta";

const Pricing = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/pricing", text: "Pricing" },
  ];
  return (
    <>
      <PageMeta
        title="Pricing | SassCandy"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <HeroSub
        title="Pricing"
        description="Choose the perfect plan that fits your needs. Whether you're just getting started or scaling up, we’ve got you covered."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Plan />
    </>
  );
};

export default Pricing;
