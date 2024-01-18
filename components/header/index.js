import { useState } from "react";
import { withAuth } from "../withAuth";
import Menu from "../menu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between px-2 items-center mx-auto bg-white min-h-[10vh] rounded-xl">
      <a href="/" className="text-2xl font-bold">
        Marcell<span className="text-blue-800">Andreas</span>
      </a>

      <aside
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex gap-3 items-center`}
      >
        <Menu />
        <button className="bg-gray-200 p-2 font-bold inline-flex justify-center items-center hover:bg-amber-400 rounded-lg min-w-20">
          Login
        </button>
      </aside>
      <div className="lg:hidden">
        <button
          className="text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}

export default withAuth(Header);
