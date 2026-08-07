import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  // Mobile menu state
  const [open, setOpen] = useState(false);

  // Navigation links
  const links = [
    {
      label: "About",
      accent: "from-amber-400 to-yellow-300",
      hover: "hover:text-amber-300",
    },
    {
      label: "Skills",
      accent: "from-rose-400 to-orange-400",
      hover: "hover:text-rose-300",
    },
    {
      label: "Projects",
      accent: "from-emerald-400 to-teal-300",
      hover: "hover:text-emerald-300",
    },
    {
      label: "Contact",
      accent: "from-sky-400 to-cyan-300",
      hover: "hover:text-sky-300",
    },
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-xl
        bg-gradient-to-b
        from-slate-950/90
        via-slate-950/80
        to-slate-950/60
        border-b
        border-red-500/20
        shadow-[0_1px_0_0_rgba(220,38,38,0.08)]
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
          >
            <span className="relative h-12 w-12 shrink-0">

              {/* Rotating Ring */}
              <span
                className="
                  absolute
                  inset-0
                  rounded-xl
                  opacity-90
                  animate-[spin_12s_linear_infinite]
                "
                style={{
                  background:
                    "conic-gradient(#7F1D1D,#B91C1C,#DC2626,#F87171,#FBBF24,#B91C1C,#7F1D1D)",
                }}
              />

              {/* Profile Image */}
              <img
                src="/profilec.jpeg"
                alt="Jimmy Safari"
                className="
                  absolute
                  inset-[2px]
                  h-[calc(100%-4px)]
                  w-[calc(100%-4px)]
                  rounded-[10px]
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </span>

            <span
              className="
                text-2xl
                font-bold
                bg-gradient-to-r
                from-red-700
                via-red-500
                to-amber-400
                bg-clip-text
                text-transparent
              "
            >
              Jimmy
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map(({ label, accent, hover }) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className={`
                    group
                    relative
                    text-sm
                    font-medium
                    uppercase
                    tracking-wide
                    text-slate-300
                    transition-all
                    duration-300
                    ${hover}
                  `}
                >
                  {label}

                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      w-0
                      bg-gradient-to-r
                      ${accent}
                      transition-all
                      duration-300
                      group-hover:w-full
                    `}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-red-500/30
              text-red-400
              transition
              hover:border-red-500
              hover:bg-red-500/10
            "
            aria-label="Toggle Menu"
          >
            {open ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${
            open
              ? "max-h-96 opacity-100 border-t border-red-500/20"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="bg-slate-950/95 backdrop-blur-xl">

          {links.map(({ label, accent }) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
                group
                flex
                items-center
                gap-3
                px-6
                py-4
                text-slate-300
                transition-all
                duration-300
                hover:bg-slate-900
                hover:text-white
              "
            >
              <span
                className={`
                  h-2
                  w-2
                  rounded-full
                  bg-gradient-to-r
                  ${accent}
                  transition-transform
                  duration-300
                  group-hover:scale-150
                `}
              />

              <span className="font-medium tracking-wide">
                {label}
              </span>
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;