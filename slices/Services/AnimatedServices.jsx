"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const AnimatedServices = ({ slice }) => {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
      >
        {slice.items.map((service, index) => (
          <div
            key={index}
            className="service-group flex w-full flex-1 flex-col justify-center gap-6 border-b border-white/20 pb-8 "
          >
            <div className="flex w-full items-center justify-between">
              {/* top */}
              <div className="text-outline text-5xl font-extrabold text-transparent transition-all duration-500">
                {index < 10 ? `0${index + 1}` : index + 1}
              </div>
              {/* link, if needed */}

              {/* <Link
                href={service.link}
                className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-500 hover:-rotate-45 hover:bg-accent"
              >
                <BsArrowDownRight className="text-3xl text-primary" />
              </Link> */}
            </div>

            {/* title */}
            <h2 className="text-[42px] font-bold leading-none transition-all duration-500">
              {service.title}
            </h2>

            {/* description */}
            <p className="text-white/60">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedServices;
