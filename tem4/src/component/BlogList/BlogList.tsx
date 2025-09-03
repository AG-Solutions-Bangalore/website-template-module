import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Blog } from "../../types/blog";

const BlogList = ({ blog }: { blog: Blog }) => {
  const { title, coverImage,  date, slug } = blog;
  console.log(blog, "blog");
  return (
    <div className="group mb-10 relative">
      <div className="mb-8 overflow-hidden rounded">
        <Link
          to={`/blogs/${slug}`}
          aria-label="blog cover"
          className="block h-72"
        >
          <img
            src={coverImage!}
            alt="image"
            className="w-full transition group-hover:scale-125 h-full"
            width={408}
            height={272}
            // layout="responsive"
            // quality={100}
          />
        </Link>
      </div>
      <div>
        <h3>
          <Link
            to={`/blogs/${slug}`}
            className="mb-4 inline-block font-semibold text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary text-xl"
          >
            {title}
          </Link>
        </h3>
        <span className="text-xs font-semibold leading-loose text-black/50 dark:text-white/50">
          {format(new Date(date), "dd MMM yyyy")}
        </span>
      </div>
    </div>
  );
};
export default BlogList;
