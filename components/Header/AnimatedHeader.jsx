"use client";

import Link from "next/link";
import Nav from "./Nav";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const AnimatedHeader = ({ settings }) => {
  return (
    <div className="container mx-auto flex items-center justify-between">
      <Link href="/">
        <h1 className="text-4xl font-semibold">
          Ashwin <span className="text-accent">.</span>
        </h1>
      </Link>

      {/* desktop nav */}
      <div className="hidden items-center gap-8 xl:flex">
        <Nav settings={settings} />
        <Link href="/contact">
          <Button>{settings.data.button_text}</Button>
        </Link>
      </div>

      {/* mobile nav */}
      <div className="xl:hidden">
        <MobileNav settings={settings} />
      </div>
    </div>
  );
};

export default AnimatedHeader;
