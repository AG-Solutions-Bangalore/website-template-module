import HeroSub from "../../component/SharedComponent/HeroSub/HeroSub";
import PageMeta from "../../component/common/PageMeta/PageMeta";
import NotFound from "./NotFound";

const NotFoundPage = () => {
  return (
    <>
      <PageMeta
        title="404 Not Found | Sustainable"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <HeroSub
        title="404"
        description="We Can't Seem to Find The Page You're Looking For."
      />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
