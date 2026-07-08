import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
FaEnvelope,
FaPhoneAlt,
FaWhatsapp,
FaLinkedin,
FaMapMarkerAlt,
FaGithub,
} from "react-icons/fa";

console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const [formData, setFormData] = useState({
from_name: "",
from_email: "",
subject: "",
message: "",
});

const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const sendEmail = async (
e: React.FormEvent<HTMLFormElement>
) => {
e.preventDefault();


setLoading(true);

try {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formData,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  setSuccess(true);

  setFormData({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  setTimeout(() => {
    setSuccess(false);
  }, 5000);

} catch (error) {
  console.error("EmailJS Error:", error);
  alert("Failed to send message. Please try again.");
}

setLoading(false);

};

return ( <section
   id="contact"
   className="relative overflow-hidden bg-slate-950 py-32 px-6"
 >
{/* Background Glow */}

  <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

  <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">

    {/* Header */}

    <div className="mb-20 text-center">

      <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
        Contact
      </p>

      <h2 className="mt-4 text-4xl font-bold md:text-6xl">
        Let's Build
        <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Something Amazing
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-slate-400">
        Looking for a software engineer, web developer,
        app developer, graphic designer or digital marketer?
        Contact Me.
      </p>

    </div>

    <div className="grid gap-12 lg:grid-cols-2">

      {/* Contact Information */}

      <div>

        <h3 className="mb-8 text-3xl font-bold">
          Get In Touch
        </h3>

        <div className="space-y-6">

          <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-md">

            <div className="rounded-xl bg-blue-500/10 p-4 text-blue-400">
              <FaEnvelope size={24} />
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Email
              </p>

              <p className="font-medium">
                jimmysafari345@gmail.com
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-md">

            <div className="rounded-xl bg-blue-500/10 p-4 text-blue-400">
              <FaPhoneAlt size={24} />
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Phone
              </p>

              <p className="font-medium">
                +254 791 939 576
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-md">

            <div className="rounded-xl bg-blue-500/10 p-4 text-blue-400">
              <FaMapMarkerAlt size={24} />
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Location
              </p>

              <p className="font-medium">
                Kilifi, Kenya
              </p>
            </div>

          </div>

        </div>

        {/* Social Links */}

        <div className="mt-10">

          <h4 className="mb-5 text-xl font-semibold">
            Connect With Me
          </h4>

          <div className="flex gap-4">

          <a
  href="https://www.linkedin.com/in/jimmy-safari-482b82310"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-blue-500"
>
  <FaLinkedin size={22} />
</a>

            <a
              href="https://github.com/JimmySaf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-blue-500"
            >
            <FaGithub size={22} />
            </a>

            <a
              href="https://wa.me/254791939576"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-green-500"
            >
              <FaWhatsapp size={22} />
            </a>

          </div>

        </div>

      </div>

      {/* Contact Form */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-md">

        <h3 className="mb-8 text-3xl font-bold">
          Send a Message
        </h3>

        <form
          onSubmit={sendEmail}
          className="space-y-5"
        >

          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
          />

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message..."
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-4 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-6
              py-4
              font-semibold
              transition
              hover:opacity-90
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center text-green-400">
              ✓ Message sent successfully!
            </div>
          )}

        </form>

      </div>

    </div>

  </div>
</section>
);
};

export default Contact;
