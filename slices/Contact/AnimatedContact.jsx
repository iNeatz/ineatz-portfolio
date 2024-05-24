"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { PrismicNextImage } from "@prismicio/next";

const infoIcons = {
  phone: <FaPhoneAlt />,
  email: <FaEnvelope />,
  map: <FaMapMarkerAlt />,
};

const AnimatedContact = ({ slice }) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="order-2 xl:order-none xl:w-[54%]">
            <PrismicNextImage field={slice.primary.svg_image} priority />
          </div>

          {/* info */}
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {slice.items.map((info, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                    <div className="text-[28px]">
                      {infoIcons[info.info_icon]}
                    </div>
                  </div>
                  <div className="flex-1 overflow-x-hidden">
                    <p className="text-white/60">{info.info_title}</p>
                    <h3 className=" text-md md:text-xl">{info.info_value}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AnimatedContact;
