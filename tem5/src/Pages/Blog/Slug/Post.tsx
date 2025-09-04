import BlogDetailsList from "../../../component/BlogList/BlogDetailsList";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../../../../utils/markdown";
import markdownToHtml from "../../../../utils/markdownToHtml";
import PageMeta from "../../../component/common/PageMeta/PageMeta";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      const p = getPostBySlug(slug, [
        "title",
        "author",
        "authorImage",
        "content",
        "coverImage",
        "date",
      ]);

      if (p) {
        setPost(p);
        const html = await markdownToHtml(p.content || "");
        setContent(html);
      }
    };

    fetchData();
  }, [slug]);

  if (!post) {
    return;
  }

  return (
    <>
      <PageMeta
        title={`${post.title || "Blog Details"} | Sustainable`}
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />

      <section className="dark:bg-darkmode py-20">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center">
            <div className="col-span-8">
              <div className="flex flex-col sm:flex-row">
                <span className="text-base text-SlateBlue pr-7 border-r border-solid border-BorderLine dark:border-dark_border w-fit dark:text-white/50">
                  {format(new Date(post.date), "dd MMM yyyy")}
                </span>
                <span className="text-base text-SlateBlue sm:pl-7 pl-0 w-fit dark:text-white/50">
                  13 Comments
                </span>
              </div>
              <h2 className="text-secondary pt-7 text-[40px] leading-[3rem] font-bold dark:text-white">
                {post.title}
              </h2>
            </div>
            <div className="flex lg:justify-center justify-start items-center gap-6 col-span-4 pt-4 md:pt-0">
              <img
                src={post.authorImage}
                alt="author"
                className="rounded-full"
                width={84}
                height={84}
                style={{ width: "auto", height: "auto" }}
              />
              <div>
                <span className="text-[22px] leading-[2rem] text-primary">
                  {post.author || "Unknown"}
                </span>
                <p className="text-xl text-SlateBlue dark:text-darktext">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-darkmode pt-0 pb-20">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full">
              <div className="mb-[60px] h-[300px] md:h-[400px] lg:h-[750px]">
                <img
                  src={post.coverImage}
                  alt="cover"
                  width={1300}
                  style={{ width: "100%", height: "100%" }}
                  className="h-full w-full object-cover object-center rounded-lg"
                />
              </div>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-8/12">
                  <div className="blog-details xl:pr-10">
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <div>{/* sidebar widgets here */}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-LightSoftBlue dark:bg-darklight! lg:py-40 py-16 lg:pb-40 pb-28 -mb-28">
        <BlogDetailsList />
      </div>
    </>
  );
}
