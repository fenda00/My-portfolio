```jsx
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#081021] py-28 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-violet-500">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind? I'd love to help bring your ideas to life.
            Send me a message and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">

              {/* Email */}
              <a
                href="mailto:sillahaisha177@email.com"
                className="flex gap-5 items-center bg-[#111827] p-6 rounded-2xl hover:-translate-y-1 transition duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    sillahaisha177@email.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+2348137940638"
                className="flex gap-5 items-center bg-[#111827] p-6 rounded-2xl hover:-translate-y-1 transition duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
                  <FaPhone />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +234 813 794 0638
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex gap-5 items-center bg-[#111827] p-6 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
                  <FaLocationDot />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    Nigeria
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <motion.form
            action="https://formspree.io/f/mrpbwdbv"
            method="POST"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              autoComplete="name"
              className="w-full bg-[#111827] text-white rounded-xl p-5 outline-none border border-gray-700 focus:border-violet-500 transition"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              autoComplete="email"
              className="w-full bg-[#111827] text-white rounded-xl p-5 outline-none border border-gray-700 focus:border-violet-500 transition"
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-[#111827] text-white rounded-xl p-5 outline-none border border-gray-700 focus:border-violet-500 transition"
            />

            {/* Message */}
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full bg-[#111827] text-white rounded-xl p-5 outline-none border border-gray-700 focus:border-violet-500 transition resize-none"
            />

            {/* Submit */}
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 px-10 py-4 rounded-full font-semibold transition duration-300 hover:scale-105"
            >
              Send Message
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
```
