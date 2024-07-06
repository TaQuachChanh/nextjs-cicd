// pages/blog/[slug].js

import { getAllBlogPosts, getBlogPostBySlug } from '../../lib/blog'; // Thay đổi đường dẫn import nếu cần

export async function getStaticPaths() {
    const posts = await getAllBlogPosts();
    const paths = posts.map(post => ({
        params: { slug: post.slug }
    }));
    return {
        paths,
        fallback: false // Hoặc true nếu bạn muốn sử dụng fallback
    };
}

export async function getStaticProps({ params }) {
    const blogData = await getBlogPostBySlug(params.slug);
    return {
        props: {
            blogData
        }
    };
}

export default function BlogPost({ blogData }) {
    return ( <
        div >
        <
        h1 > { blogData.title } < /h1> <
        div > { blogData.content } < /div> < /
        div >
    );
}