import { Data } from "@/data";
import Link from "next/link";

const Blog = () => {
  return (
    <section>
      <h2>Blog</h2>
      {Data.map((data) => (
        <Link key={data.id} href={`/blog/${data.id}`}>
          <p>{data.name}</p>
        </Link>
      ))}
    </section>
  );
};

export default Blog;
