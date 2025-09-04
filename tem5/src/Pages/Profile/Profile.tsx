import PageMeta from "../../component/common/PageMeta/PageMeta";
import HeroSub from "../../component/SharedComponent/HeroSub/HeroSub";
import CardBox from "../Home/WorkGrow/CardBox";

const Profile = () => {
  return (
    <div>
      <PageMeta
        title="Portfolio | Sustainable"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <HeroSub
        title="Portfolio"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <CardBox />
    </div>
  );
};

export default Profile;
