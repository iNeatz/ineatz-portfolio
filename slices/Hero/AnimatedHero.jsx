"use client";

import Photo from "@/components/Hero/Photo";
import Socials from "@/components/Hero/Socials";
import Stats from "@/components/Hero/Stats";
import { Button } from "@/components/ui/button";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { FiDownload } from "react-icons/fi";

const AnimatedHero = ({ slice }) => {
  const stats = [
    {
      num: slice.primary.experience,
      text: "Years of Learning",
    },
    {
      num: slice.primary.projects,
      text: "Projects completed",
    },
    {
      num: slice.primary.technologies,
      text: "Technologies mastered",
    },
    {
      num: slice.primary.commits,
      text: "Code commits",
    },
  ];

  return (
    <>
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          {/* text */}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">{slice.primary.designation}</span>
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-[48px] font-semibold leading-[1.1] xl:text-[80px]">
                    {children}
                  </h1>
                ),
                em: ({ children }) => (
                  <em className="text-[48px] font-semibold not-italic leading-[1.1] text-accent xl:text-[80px]">
                    {children}
                  </em>
                ),
              }}
            />
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="mb-9 max-w-[500px] text-white/80">{children}</p>
                ),
              }}
            />

            {/* btn and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <PrismicNextLink
                field={slice.primary.resume_link}
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 uppercase"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </PrismicNextLink>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  socialList={slice.items}
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo photo={slice.primary.photo} />
          </div>
        </div>
      </div>
      <Stats stats={stats} />
    </>
  );
};

export default AnimatedHero;
