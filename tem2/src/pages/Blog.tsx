import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponents/HeroSub";

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];
  return (
    <>
      <HeroSub
        title="Blog"
         description=""
        breadcrumbLinks={breadcrumbLinks}  
         />
      <BlogList />
    </>
  );
};

export default BlogPage;