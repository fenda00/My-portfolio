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
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-violet-500">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,x:-50 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
          >

            <div className="space-y-8">

              <div className="flex gap-5 items-center bg-[#111827] p-6 rounded-2xl">

                <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center">
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

              </div>

              <div className="flex gap-5 items-center bg-[#111827] p-6 rounded-2xl">

                <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center">
                  <FaPhone />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +234 8137940638
                  </p>
                </div>

              </div>

              <div className="flex gap-5 items-center bg-[#111827] p-6 rounded-2xl">

                <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center">
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

          {/* Right */}

          <motion.form
            initial={{ opacity:0,x:50 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            className="space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#111827] rounded-xl p-5 outline-none border border-gray-700 focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#111827] rounded-xl p-5 outline-none border border-gray-700 focus:border-violet-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#111827] rounded-xl p-5 outline-none border border-gray-700 focus:border-violet-500"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-[#111827] rounded-xl p-5 outline-none border border-gray-700 focus:border-violet-500"
            />

            <button
              className="bg-violet-600 hover:bg-violet-700 px-10 py-4 rounded-full font-semibold transition"
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