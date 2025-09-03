import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";

const Features: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const leftAnimation = {
    animate: inView ? { x: 0, opacity: 1 } : { x: "-10%", opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  };
  const rightAnimation = {
    animate: inView ? { x: 0, opacity: 1 } : { x: "10%", opacity: 0 },
    transition: { duration: 1, delay: 0.8 },
  };

  return (
    <section className="bg-grey dark:bg-darklight overflow-x-hidden">
      <div
        ref={ref}
        className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4"
      >
        <div className="grid grid-cols-12 xl:gap-24 gap-6 gap-y-11 items-center">
          {/* Left Image */}
          <div className="lg:col-span-6 col-span-12 px-3">
            <motion.div {...leftAnimation}>
              <img
                src="/images/services/our-service.webp"
                alt="services"
                width={550}
                height={450}
                className="w-full h-full"
              />
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 col-span-12 px-3">
            <motion.div {...rightAnimation}>
              <p className="dark:text-white/50 text-black/50 text-lg pb-8 mb-0">
                Why Choose Us
              </p>
              <h3 className="md:text-6xl sm:text-40 text-3xl font-semibold text-dark dark:text-white pb-8">
                Top Features That Set Us Apart
              </h3>
              <ul>
                {[
                  "Effortless User Management and Access Control",
                  "Effortless Multi-Platform Deployment for Growth",
                  "SEO Optimization for Higher Search Rankings",
                  "Reliable 24/7 Customer Support for You",
                ].map((text, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 items-center pb-6 last:pb-0"
                  >
                    <span>
                      <Icon
                        icon="tabler:circle-check"
                        width="25"
                        height="25"
                        className="font-semibold text-success"
                      />
                    </span>
                    <p className="text-lg text-black/50 dark:text-white/50">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="/services"
                  className="py-1.125 px-2.188 bg-primary rounded-lg hover:bg-orange-600 duration-300 text-white font-semibold block w-fit"
                >
                  All Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
