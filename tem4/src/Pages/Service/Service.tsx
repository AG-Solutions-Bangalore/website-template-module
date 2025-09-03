import ServicesCard from "../../component/Services/ServicesCard/ServicesCard";
import HeroSub from "../../component/SharedComponent/HeroSub/HeroSub";
import PageMeta from "../../component/common/PageMeta/PageMeta";

const Service = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <PageMeta
        title="Service | SassCandy"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <HeroSub
        title="Our Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ServicesCard />
    </>
  );
};

export default Service;
