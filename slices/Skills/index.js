import { TabsContent } from "@/components/ui/tabs";
import {
  SiCsharp,
  SiCss3,
  SiDjango,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaJava, FaSass } from "react-icons/fa6";
import { PrismicRichText } from "@prismicio/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/**
 * @typedef {import("@prismicio/client").Content.SkillsSlice} SkillsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SkillsSlice>} SkillsProps
 * @param {SkillsProps}
 */
const skillList = {
  nextjs: <SiNextdotjs />,
  reactjs: <SiReact />,
  cSharp: <SiCsharp />,
  python: <SiPython />,
  php: <SiPhp />,
  reactNative: <TbBrandReactNative />,
  django: <SiDjango />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,
  java: <FaJava />,
  kotlin: <SiKotlin />,
  tailwindCss: <SiTailwindcss />,
  nodejs: <SiNodedotjs />,
  mongodb: <SiMongodb />,
  typescript: <SiTypescript />,
  git: <SiGit />,
  flutter: <SiFlutter />,
  sass: <FaSass />,
};

const Skills = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TabsContent value="skills" className="h-full w-full">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-4xl font-bold capitalize">{children}</h2>
                ),
              }}
            />
            <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
              {slice.primary.description}
            </p>
          </div>

          <ScrollArea className="h-[400px]">
            <ul className="sm:grid-cols:3 grid grid-cols-2 gap-4 md:grid-cols-4 xl:gap-[30px]">
              {slice.items.map((item) => (
                <li key={item.skill}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="bg-secondary group flex h-[150px] w-full items-center justify-center rounded-xl">
                        <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                          {skillList[item.skill]}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </TabsContent>
    </section>
  );
};

export default Skills;
