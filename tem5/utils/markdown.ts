const markdownModules = import.meta.glob("../markdown/Blog/*.mdx", {
  eager: true,
  as: "raw",
});

function parseFrontmatter(content: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content };
  }

  const frontmatter = match[1];
  const markdownContent = match[2];

  const data: any = {};
  frontmatter.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      data[key] = value;
    }
  });

  return { data, content: markdownContent };
}

export function getPostSlugs() {
  return Object.keys(markdownModules).map((path) => {
    const filename = path.split("/").pop() || "";
    return filename.replace(".mdx", "");
  });
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const filePath = `../markdown/Blog/${slug}.mdx`;
  const fileContent = markdownModules[filePath];

  if (!fileContent) {
    console.warn(`File not found for slug: ${slug}`);
    return {};
  }

  const { data, content } = parseFrontmatter(fileContent);
  const items: any = {};

  function processImages(content: string) {
    return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
  }

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = processImages(content);
    }
    if (field === "metadata") {
      items[field] = { ...data, coverImage: data.coverImage || null };
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => post.title) 
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
