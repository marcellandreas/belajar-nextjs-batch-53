import { Data } from "@/data";
import Layout from "@/layout";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout metaTitle="Blog" metaDescription="Informasi Blog">
      <h2>Blog</h2>
      {Data.map((data) => (
        <Link key={data.id} href={`/blog/${data.id}`}>
          <p className=" bg-gray-300/20 gap-2 p-2 rounded-xl">{data.name}</p>
        </Link>
      ))}
    </Layout>
  );
};

export default Blog;
