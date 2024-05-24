import AnimatedWorks from "./AnimatedWorks";

/**
 * @typedef {import("@prismicio/client").Content.WorksSlice} WorksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorksSlice>} WorksProps
 * @param {WorksProps}
 */
const Works = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AnimatedWorks slice={slice} />
    </section>
  );
};

export default Works;
