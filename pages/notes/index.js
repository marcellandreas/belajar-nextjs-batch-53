import dynamic from "next/dynamic";
import Link from "next/link";
const LayoutComponent = dynamic(() => import("@/layout"));

const Notes = ({ notes }) => {
  console.log(notes);
  return (
    <>
      <LayoutComponent>
        {notes.data.map((data) => (
          <Link
            href={`/notes/${data.id}`}
            key={data.id}
            style={{
              border: "1px solid black",
              marginBottom: "5px",
              padding: "12px",
              minWidth: "220px",
            }}
          >
            <p>{data.title}</p>
            <p>{data.description}</p>
          </Link>
        ))}
      </LayoutComponent>
    </>
  );
};

export default Notes;

export async function getStaticProps() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const notes = await res.json();
  return { props: { notes }, revalidate: 10 };
}
