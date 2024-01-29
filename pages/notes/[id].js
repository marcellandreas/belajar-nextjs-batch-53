import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function DetailNotes({ notes }) {
  console.log("data detail", notes);
  return (
    <LayoutComponent metaTitle="Detail Notes">
      <div>
        <p>{notes.data.created_at.slice(0, 10)}</p>
        <p>{notes.data.title}</p>
        <p>{notes.data.description}</p>
        <p>{notes.data.updated_at.slice(0, 10)}</p>
      </div>
    </LayoutComponent>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const notes = await res.json();

  const paths = notes.data.map((data) => ({
    params: {
      id: data.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(
    `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
  );
  const notes = await res.json();
  return { props: { notes }, revalidate: 10 };
}
