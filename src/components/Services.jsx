import { motion } from "framer-motion";
import { services } from "../data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#081021] px-6 py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-violet-500">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            What I Can Do
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            I build modern, responsive, and user-friendly web applications
            focused on performance, accessibility, and exceptional user
            experience.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-gray-700 bg-[#111827] p-8 transition-all duration-300 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 text-3xl text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-600/30">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* Contact Link */}
                <a
                  href="#contact"
                  className="mt-8 inline-block font-semibold text-violet-400 transition hover:translate-x-1 hover:text-violet-300"
                >
                  Let's Work Together →
                </a>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;