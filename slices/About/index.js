import { ScrollArea } from "@/components/ui/scroll-area";
import { TabsContent } from "@/components/ui/tabs";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @param {AboutProps}
 */
const About = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TabsContent value="about" className="w-full text-center xl:text-left">
        <div>
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

          <ScrollArea className="mt-10 h-[400px]">
            <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
              {slice.items.map((info) => (
                <li
                  key={info.property}
                  className="flex flex-col items-center justify-center gap-4 md:flex-row xl:justify-start"
                >
                  <span className="text-white/60">{info.property}</span>
                  <span className="text-xl">{info.value}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </TabsContent>
    </section>
  );
};

export default About;
