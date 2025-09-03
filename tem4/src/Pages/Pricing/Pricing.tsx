import HeroSub from "../../component/SharedComponent/HeroSub/HeroSub";
import Plan from "../Plans/Plans";

const Pricing = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/pricing", text: "Pricing" },
  ];
  return (
    <>
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
