import fs from 'fs';
import path from 'path';

// Đường dẫn đến tệp JSON chứa dữ liệu blog
const blogsFilePath = path.join(process.cwd(), 'blogs.json');

// Hàm để lấy tất cả các slugs
export function getAllBlogSlugs() {
  const fileContents = fs.readFileSync(blogsFilePath, 'utf8');
  const blogs = JSON.parse(fileContents);

  return blogs.map(blog => blog.slug);
}

// Hàm để lấy dữ liệu blog dựa trên slug
export function getBlogData(slug) {
  const fileContents = fs.readFileSync(blogsFilePath, 'utf8');
  const blogs = JSON.parse(fileContents);

  const blog = blogs.find(blog => blog.slug === slug);

  if (!blog) {
    return null;
  }

  return {
    slug,
    ...blog
  };
}
