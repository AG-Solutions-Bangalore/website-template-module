import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { getPostBySlug } from "../../../../utils/markdown";
import markdownToHtml from "../../../../utils/markdownToHtml";
import PageMeta from "../../../component/common/PageMeta/PageMeta";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (!slug) return;

    const loadPost = async () => {
      try {
        const postData = getPostBySlug(slug, [
          "title",
          "author",
          "authorImage",
          "content",
          "coverImage",
          "date",
        ]);

        if (postData) {
          setPost(postData);
          const html = await markdownToHtml(postData.content || "");
          setContent(html);
        }
      } catch (err) {
        console.error("❌ Failed to load post:", err);
      }
    };

    loadPost();
  }, [slug]);

  if (!post) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Post not found</h2>
      </section>
    );
  }

  return (
    <>
      <PageMeta
        title="Blog Details | SassCandy"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <section className="relative dark:bg-darkmode pt-7.5! pb-8!">
        <div className="container lg:max-w-xl md:max-w-screen-md mx-auto px-4">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center">
            <div className="col-span-8">
              <div className="flex flex-col sm:flex-row">
                <span className="text-base text-midnight_text font-medium dark:text-white pr-7 border-r border-solid border-lightborder dark:border-darkborder w-fit">
                  {post.date ? format(new Date(post.date), "dd MMM yyyy") : ""}
                </span>
                <span className="text-base text-midnight_text font-medium dark:text-white sm:pl-7 pl-0 w-fit">
                  13 Comments
                </span>
              </div>
              <h2 className="text-midnight_text dark:text-white md:text-[40px] leading-tight text-4xl font-bold pt-7">
                {post.title}
              </h2>
            </div>
            <div className="flex items-center md:justify-center justify-start gap-6 col-span-4 pt-4 md:pt-0">
              {post.authorImage && (
                <img
                  src={post.authorImage}
                  alt="Author"
                  className="rounded-full !w-20 !h-20"
                  width={80}
                  height={80}
                />
              )}
              <div>
                <span className="text-xl font-bold text-midnight_text dark:text-white capitalize">
                  {post.author || "Unknown"}
                </span>
                <p className="text-xl text-gray dark:text-white">Author</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="dark:bg-darkmode pt-8!">
        <div className="container lg:max-w-xl md:max-w-screen-md mx-auto px-4">
          <div className="grid-cols-3 grid">
            <div className="z-20 mb-24 max-h-[448px] overflow-hidden rounded col-span-3">
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt="Cover"
                  className="h-full w-full object-cover object-top rounded-3xl"
                />
              )}
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 col-span-3">
              <div className="blog-details xl:pr-10">
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 col-span-3">
              <div>
                <div className="mb-8 flex flex-col">
                  {/* Social Share */}
                  <div className="w-full py-12 px-11 bg-white dark:bg-darklight shadow-lg border-b-2 border-lightborder dark:border-darkborder rounded-t-lg">
                    <h2 className="mb-5 dark:text-white text-black text-3xl font-medium">
                      Share
                    </h2>
                    <div className="flex gap-4 flex-col">
                      <div className="bg-[#526fa3] py-4 px-6 text-xl rounded-lg text-white">
                        <Link to="#">Facebook</Link>
                      </div>
                      <div className="bg-[#46C4FF] py-4 px-6 text-xl rounded-lg text-white">
                        <Link to="#">Twitter</Link>
                      </div>
                      <div className="bg-[#3C86AD] py-4 px-6 text-xl rounded-lg text-white">
                        <Link to="#">LinkedIn</Link>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="w-full py-12 px-11 bg-white dark:bg-darklight shadow-lg rounded-b-lg">
                    <p className="text-3xl font-medium mb-4">
                      Join our Newsletter
                    </p>
                    <input
                      placeholder="Email address"
                      className="p-3 dark:bg-darkmode border border-border rounded-lg mb-2 w-full"
                    />
                    <button className="w-full py-4 px-9 text-lg font-medium bg-primary hover:bg-orange-600 duration-300 rounded-lg text-white">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
