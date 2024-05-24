"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderButtons from "@/components/Work/WorkSliderButtons";

const AnimatedWorks = ({ slice }) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [project, setProject] = useState(slice.items[projectIndex]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;

    //update project state based on current slide index
    setProjectIndex(currentIndex);
    setProject(slice.items[currentIndex]);
  };

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
      className="flex min-h-[80vh] flex-col justify-center py-12 pt-0 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex flex-col gap-[30px]">
              {/* outline number */}
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {projectIndex + 1 < 10
                  ? `0${projectIndex + 1}`
                  : projectIndex + 1}
              </div>
              <span className=" w-fit rounded-md bg-white/50 px-4 py-1 text-xs text-secondary">
                {project.category}
              </span>

              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {project.title}
              </h2>

              <p className="text-white/60">{project.description}</p>

              <p className="text-xl text-accent">{project.skills_used}</p>

              {/* border */}
              <div className="border-b border-white/20"></div>

              {/* buttons */}
              <div className="mb-12 flex items-center gap-4">
                {/* live project button */}
                <PrismicNextLink field={project.live_site_link}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Site</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </PrismicNextLink>

                {/* github repo button */}
                <PrismicNextLink field={project.github_link}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </PrismicNextLink>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {slice.items.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>

                    {/* image */}
                    <div className="relative h-full w-full">
                      <PrismicNextImage
                        field={project.image}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AnimatedWorks;
