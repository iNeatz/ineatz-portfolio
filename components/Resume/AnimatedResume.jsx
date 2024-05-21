"use client";

import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const AnimatedResume = ({ slices }) => {
  return (
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
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <SliceZone slices={slices} components={components} />
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default AnimatedResume;
