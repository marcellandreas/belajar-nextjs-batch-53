import dynamic from "next/dynamic";
const LayoutComponent = dynamic(() => import("@/layout"));

const Posts = ({ dataposts }) => {
  return (
    <LayoutComponent metaTitle="Post">
      {dataposts.map((data) => (
        <div
          style={{
            border: "2px solid gray",
            margin: "10px auto",
            padding: "10px",
            borderRadius: "12px",
          }}
          key={data.id}
        >
          <p style={{ textDecoration: "underline 2px solid" }}>
            <span style={{ fontWeight: "bold" }}>{data.id}. </span>
            {data.title}
          </p>
          <p>{data.body}</p>
        </div>
      ))}
    </LayoutComponent>
  );
};

export default Posts;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataposts = await res.json();
  return { props: { dataposts } };
}
