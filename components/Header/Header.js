
import { createClient } from "@/prismicio";
import AnimatedHeader from "./AnimatedHeader";

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("header");

  return (
    <header className="text-white py-8 xl:py-12">
      <AnimatedHeader settings={settings} />
    </header>
  );
};

export default Header;
