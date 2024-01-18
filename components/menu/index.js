export default function Menu({ isOpen }) {
  return (
    <div className="flex items-center gap-3 text-xl">
      <a
        href="/home"
        className=" hover:underline hover:text-gray-400 font-semibold"
      >
        Home
      </a>
      <a
        href="/profile"
        className=" hover:underline hover:text-gray-400 font-semibold"
      >
        Profile
      </a>
      <a
        href="/profile"
        className=" hover:underline hover:text-gray-400 font-semibold"
      >
        Blog
      </a>
      <a
        href="/profile"
        className=" hover:underline hover:text-gray-400 font-semibold"
      >
        Contact
      </a>
    </div>
  );
}
