import BlogList from "../../component/BlogList/BlogList";
import HeroSub from "../../component/SharedComponent/HeroSub/HeroSub";
import { getAllPosts } from "../../../utils/markdown";
import PageMeta from "../../component/common/PageMeta/PageMeta";
const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];
  return (
    <>
      <PageMeta
        title="Blog | SassCandy"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <HeroSub
        title="Blog"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="flex flex-wrap justify-center dark:bg-darkmode">
        <div className="container px-4">
          <div className="grid grid-cols-12 lg:px-4 px-0 gap-7">
            {posts.map((blog, i) => (
              <div
                key={i}
                className="w-full lg:col-span-4 md:col-span-6 col-span-12"
              >
                <BlogList blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
