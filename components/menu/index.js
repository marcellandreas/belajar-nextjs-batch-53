import Link from "next/link";

export default function Menu({ isOpen }) {
  // sebelumnya saya pernah membuat pages routing
  const menu = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "profile",
      href: "/profile",
    },
    {
      id: 3,
      name: "blog",
      href: "/blog",
    },
    {
      id: 4,
      name: "contact",
      href: "/contact",
    },
  ];
  return (
    <div className="flex items-center gap-3 text-xl">
      {menu.map((data) => (
        <Link href={data.href} key={data.id}>
          {data.name}
        </Link>
      ))}
    </div>
  );
}
