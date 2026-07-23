import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiPhp,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
      },
      {
        name: "Python",
        icon: <FaPython />,
      },
      {
        name: "PHP",
        icon: <SiPhp />,
      },
    ],
  },

  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: <SiMysql />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
    ],
  },

  {
    title: "Tools & Workflow",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
      },
      {
        name: "Figma",
        icon: <FaFigma />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-red-500 uppercase tracking-[0.3em] text-sm">
            Technical Arsenal
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Skills &
            <span className="block bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to design,
            develop and deploy modern software solutions.
          </p>

        </div>

        {/* Category Grid */}

        <div className="grid lg:grid-cols-2 gap-8">

          {skillGroups.map((group) => (

            <div
              key={group.title}
              className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/40
                backdrop-blur-md
                p-8
                hover:border-red-500/40
                transition-all
                duration-500
              "
            >

              <h3 className="text-2xl font-bold mb-8">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-4">

                {group.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      px-5
                      py-3
                      rounded-2xl
                      border
                      border-slate-800
                      bg-slate-950/50
                      hover:border-orange-500
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >

                    <span className="text-2xl text-red-500 group-hover:scale-110 transition">
                      {skill.icon}
                    </span>

                    <span className="text-slate-200">
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Tech Strip */}

        <div className="mt-20">

          <div
            className="
              rounded-3xl
              border
              border-slate-800
              bg-gradient-to-r
              from-slate-900
              via-slate-950
              to-slate-900
              p-8
            "
          >

            <h3 className="text-center text-2xl font-bold mb-6">
              Current Focus
            </h3>

            <div className="flex flex-wrap justify-center gap-4">

              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Cloud Computing",
                "Database",
                "REST APIs",
                "System Design",
                "UI/UX",

              ].map((item) => (

                <span
                  key={item}
                  className="
                    px-5
                    py-2
                    rounded-full
                    bg-orange-500/10
                    border
                    border-red-500/20
                    text-red-400
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;