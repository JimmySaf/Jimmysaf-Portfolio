import { useState } from "react";

const projects = [
  {
    category: "Professional Experience",
    title: "ICT Attachment - Kilifi County Assembly",
    description:
      "Completed industrial attachment in the ICT Department supporting users, troubleshooting systems, maintaining ICT infrastructure and assisting in technology operations.",
    technologies: [
      "Technical Support",
      "Networking",
      "ICT Operations",
      "System Maintenance",
    ],
  },

  {
    category: "Freelancing",
    title: "Freelance Digital Solutions",
    description:
      "Providing professional web development, mobile application development, digital marketing, branding and software solutions to clients and organizations.",
    technologies: [
      "Web Development",
      "App Development",
      "SEO",
      "Digital Marketing",
      "Branding",
    ],
  },

  {
    category: "Graphic Design",
    title: "Creative Design Portfolio",
    description:
      "Designing church posters, event graphics, social media creatives, logos and brand identity materials.",
    technologies: [
      "Photoshop",
      "Canva",
      "Brand Identity",
      "Social Media Design",
    ],
  },

  {
    category: "Education",
    title: "BSc Software Engineering",
    description:
      "Currently pursuing a Bachelor of Science in Software Engineering at Kirinyaga University while developing practical software engineering and leadership skills.",
    technologies: [
      "Programming",
      "Databases",
      "System Analysis",
      "Software Engineering",
    ],
  },

  {
    category: "Web Development",
    title: "Church Website Project",
    description:
      "Designed and developed a modern church website featuring ministries, leadership profiles, sermons, events and responsive user experiences.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

{
  category: "Web Development",
  title: "Koheleth International Organization Website",
  description:
    "Designed and developed a modern, responsive website for Koheleth International Organization. The platform showcases the organization's vision, leadership, ministries, events, projects and global outreach while providing an engaging user experience across all devices.",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Responsive Design",
    "UI/UX Design",
    "Frontend Development",
  ],
},
  {
    category: "Academic Project",
    title: "Multimedia Systems Project",
    description:
      "Applied multimedia concepts, interaction design principles and development methodologies through academic coursework and projects.",
    technologies: [
      "Multimedia",
      "UI Design",
      "Development",
    ],
  },
];

const services = [
  "Web Development",
  "Mobile Apps",
  "Digital Marketing",
  "Graphic Design",
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-32 px-6"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-20 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">

            Projects, Leadership &
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Digital Portfolio
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            A showcase of software engineering, leadership,
            freelancing, entrepreneurship and creative design work.
          </p>

        </div>

        {/* Founder Card */}

        <div
          className="
            mb-16
            rounded-3xl
            border
            border-blue-500/30
            bg-gradient-to-r
            from-blue-500/10
            to-cyan-500/10
            p-10
            backdrop-blur-md
          "
        >
          <span className="text-sm uppercase tracking-wider text-blue-400">
            Founder & Leadership
          </span>

          <h3 className="mt-3 text-3xl font-bold md:text-4xl">
            Founder & CEO — Sajims Company
          </h3>

          <p className="mt-6 max-w-3xl leading-relaxed text-slate-300">
            Leading Sajims in delivering innovative software solutions,
            digital services, technology consulting and creative branding.
            Driving business growth through innovation and technology.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "Leadership",
              "Business Strategy",
              "Innovation",
              "Technology",
            ].map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  px-4
                  py-2
                  text-sm
                  text-blue-400
                "
              >
                {tag}
              </span>
            ))}

          </div>

        </div>

        {/* Services */}

        <div className="mb-16 grid gap-6 md:grid-cols-4">

          {services.map((service) => (
            <div
              key={service}
              className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/40
                p-6
                text-center
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
              "
            >
              <h4 className="font-semibold">
                {service}
              </h4>
            </div>
          ))}

        </div>

        {/* Projects Grid */}

        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (

            <div
              key={project.title}
              className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/40
                p-8
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-500/40
              "
            >

              <span className="text-sm text-blue-400">
                {project.category}
              </span>

              <h3 className="mt-3 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-slate-700
                      px-3
                      py-1
                      text-sm
                      text-slate-300
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Graphic Design Showcase */}

        <div className="mt-24">

          <div className="mb-12 text-center">

            <h3 className="text-3xl font-bold">
              Graphic Design Showcase
            </h3>

            <p className="mt-4 text-slate-400">
              Selected branding, social media and creative design projects.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {[
              {
                image: "/design1.png",
                title: "Fellowship Mobilisation",
              },
              {
                image: "/design2.png",
                title: "Church poster",
              },
              {
                image: "/design3.jpg",
                title: "Birthday flyers",
              },
            ].map((design) => (

              <div
                key={design.title}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-900/40
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-500/40
                "
              >

                <img
                  src={design.image}
                  alt={design.title}
                  onClick={() => setSelectedImage(design.image)}
                  className="
                    h-72
                    w-full
                    cursor-pointer
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="p-6">

                  <h4 className="font-semibold">
                    {design.title}
                  </h4>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Lightbox */}

      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/90
            backdrop-blur-md
            p-6
          "
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="
              absolute
              top-6
              right-8
              text-5xl
              text-white
            "
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[90vh]
              max-w-[90vw]
              rounded-3xl
              shadow-2xl
            "
          />

        </div>

      )}

    </section>
  );
};

export default Projects;