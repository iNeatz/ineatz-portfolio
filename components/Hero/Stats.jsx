import CountUp from "react-countup";

const Stats = ({ stats }) => {
  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((stat) => (
            <div
              key={stat.text}
              className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p
                className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
