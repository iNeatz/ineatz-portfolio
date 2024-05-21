import AnimatedServices from "./AnimatedServices";

/**
 * @typedef {import("@prismicio/client").Content.ServicesSlice} ServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesSlice>} ServicesProps
 * @param {ServicesProps}
 */
const Services = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0"
    >
      <AnimatedServices slice={slice} />
    </section>
  );
};

export default Services;
