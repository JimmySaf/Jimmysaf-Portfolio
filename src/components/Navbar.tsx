import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  // Mobile menu state
  const [open, setOpen] = useState(false);

  // Navigation Links
  const links = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-lg
        bg-slate-950/70
        border-b
        border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="
              text-2xl
              font-bold
              text-white
              transition
              hover:text-blue-400
            "
          >
            Jimmy
            <span className="text-red-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-slate-300">

            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="
                    relative
                    transition
                    hover:text-blue-500
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-blue-500
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {link}
                </a>
              </li>
            ))}

          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              text-white
              text-3xl
              transition
              hover:text-blue-500
            "
            aria-label="Toggle Menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${
            open
              ? "max-h-96 opacity-100 border-t border-slate-800"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="bg-slate-900/95 backdrop-blur-md">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
                block
                px-6
                py-4
                text-slate-300
                transition-all
                duration-300
                hover:bg-slate-800
                hover:text-blue-400
              "
            >
              {link}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;