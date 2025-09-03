import HeroSub from "../../component/SharedComponent/HeroSub/HeroSub";
import Features from "../Features/Features";
import ProductDoc from "../ProductDoc/ProductDoc";

const Profile = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
  ];

  return (
    <div>
      <HeroSub
        title="Portfolio"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Features />
      <ProductDoc />
    </div>
  );
};

export default Profile;
