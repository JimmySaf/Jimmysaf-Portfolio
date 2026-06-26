import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          <a
  href="#home"
  className="text-2xl font-bold text-white"
>
  Jimmy<span className="text-blue-500">.</span>
</a>

          <ul className="hidden md:flex gap-8 text-slate-300">

            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-blue-500 transition"
                >
                  {link}
                </a>
              </li>
            ))}

          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

        </div>

      </div>

      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-6 py-4 text-slate-300 hover:bg-slate-800"
            >
              {link}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
};

export default Navbar;