import BlogList from "../../component/BlogList/BlogList";
import PageMeta from "../../component/common/PageMeta/PageMeta";
import HeroSub from "../../component/SharedComponent/HeroSub/HeroSub";
const Blog = () => {
  return (
    <>
      <PageMeta
        title="Blog | SassCandy"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <HeroSub
        title="Blog"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
      />
      <BlogList />
    </>
  );
};

export default Blog;
