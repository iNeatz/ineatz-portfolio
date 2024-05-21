import { ScrollArea } from "@/components/ui/scroll-area";
import { TabsContent } from "@/components/ui/tabs";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ExperienceSlice} ExperienceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExperienceSlice>} ExperienceProps
 * @param {ExperienceProps}
 */
const Experience = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TabsContent value={slice.primary.timeline_id} className="w-full">
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

          <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
              {slice.items.map((item, index) => (
                <li
                  key={index}
                  className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-secondary px-10 py-6 lg:items-start"
                >
                  <span className="text-accent">{item.time_frame}</span>
                  <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                    {item.program}
                  </h3>
                  <div className="flex items-center gap-3">
                    {/* dot */}
                    <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60">{item.institution}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </TabsContent>
    </section>
  );
};

export default Experience;
