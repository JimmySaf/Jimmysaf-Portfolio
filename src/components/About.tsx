const About = () => {
  const stats = [
    {
      value: "14+",
      label: "Projects Built",
    },
    {
      value: "10+",
      label: "Technologies",
    },
    {
      value: "4+",
      label: "Years Learning",
    },
    {
      value: "100%",
      label: "Passion Driven",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">

          <span className="text-blue-500 uppercase tracking-[0.3em] text-sm">
            About Me
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Building Solutions
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Through Code
            </span>
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-md p-8">

              <h3 className="text-3xl font-bold mb-6">
                Who I Am
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6">
                I am Jimmy Safari, a Software Engineering student
                passionate about developing scalable applications,
                solving real-world problems and creating exceptional
                digital experiences.
              </p>

              <p className="text-slate-400 leading-relaxed mb-6">
                My journey spans frontend development, backend
                engineering, databases, UI/UX design and modern web
                technologies. I enjoy transforming ideas into reliable
                and user-friendly software products.
              </p>

              <p className="text-slate-400 leading-relaxed">
                Currently, I am focused on AI, mastering
                TypeScript, Node.js, Python and enterprise software
                development while contributing to meaningful projects.
              </p>

            </div>

          </div>

          {/* Right Side */}
          <div>

            <div className="grid grid-cols-2 gap-6">

              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="
                    rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900/50
                    backdrop-blur-md
                    p-8
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-blue-500
                  "
                >
                  <h3 className="text-4xl font-bold text-blue-500">
                    {stat.value}
                  </h3>

                  <p className="mt-3 text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

            {/* Extra Card */}

            <div
              className="
                mt-6
                rounded-3xl
                border
                border-slate-800
                bg-gradient-to-r
                from-blue-500/10
                to-cyan-500/10
                p-8
              "
            >
              <h3 className="text-2xl font-bold mb-3">
                Career Objective
              </h3>

              <p className="text-slate-400">
                To become a world-class software engineer,
                building innovative systems that create
                meaningful impact across industries.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;