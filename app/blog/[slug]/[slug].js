import { useRouter } from 'next/router';
import { getAllBlogSlugs, getBlogData } from '../../lib/blogs';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({
    slug: slug
  }));
}

export async function getStaticProps({ params }) {
  const blogData = getBlogData(params.slug);
  if (!blogData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blogData
    }
  };
}

const BlogPost = ({ blogData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blogData.title}</h1>
      <div>{blogData.content}</div>
    </div>
  );
};

export default BlogPost;
