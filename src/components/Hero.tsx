import { useEffect, useState } from "react";

const ROLES = [
  "Software engineer",
  "Tech Enthuasiast",
  "IT Consultant",
  "Founder Sajims",
  "Graphic Designer",
  "Freelancer",
];

function useTyping(
  words: string[],
  speed = 80,
  pause = 1400
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);

        if (next === word) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);

        if (next === "") {
          setDeleting(false);
          setIndex((v) => v + 1);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const Hero = () => {
  const typed = useTyping(ROLES);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Glow Orb 1 */}
      <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

      {/* Glow Orb 2 */}
      <div className="absolute top-32 right-0 h-[350px] w-[350px] rounded-full bg-amber-500/20 blur-3xl animate-pulse" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 pt-36 pb-24 lg:grid-cols-[1.2fr_1fr]">

        {/* Left Content */}
        <div>

          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-blue-500">
            My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">

            Hi, I'm{" "}

            <span className="bg-gradient-to-r from blue-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              Jimmy Safari
            </span>

          </h1>

          <p className="mt-6 font-mono text-xl text-slate-400 md:text-2xl">
            {typed}
            <span className="ml-1 animate-pulse text-blue-500">
              |
            </span>
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            I design and build elegant,
            performant web experiences —
            from full-stack platforms to
            modern enterprise systems.
            Currently focused on React,
            TypeScript and scalable backend
            solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">

            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
            >
              View Projects →
            </a>

            <a
              href="/resume.pdf"
              download="Jimmy-Safari-Resume.pdf"
              className="rounded-full border border-slate-700 px-6 py-3 transition hover:bg-slate-900"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-full px-6 py-3 text-slate-400 transition hover:text-white"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">

          <div className="relative h-80 w-80 md:h-96 md:w-96">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Rotating Ring */}
            <div
              className="absolute inset-0 rounded-full animate-spin"
              style={{
                animationDuration: "12s",
                background:
                  "conic-gradient(#3b82f6,#06b6d4,#f59e0b,#8b5cf6,#3b82f6)",
              }}
            />

            {/* Dark Ring */}
            <div className="absolute inset-[4px] rounded-full bg-slate-950" />

            {/* Profile Image */}
            <div className="absolute inset-[8px] overflow-hidden rounded-full border border-slate-800">

              <img
                src="/profilec.png"
                alt="Jimmy Safari"
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />

            </div>

            {/* Open To Work */}
            <div className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-xs shadow-xl">

              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

              Open to Work

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;