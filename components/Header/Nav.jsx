"use client";

import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";

const Nav = ({ settings }) => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {settings.data.navigation.map((item) => (
        <PrismicNextLink
          field={item.nav_link}
          key={item.nav_title}
          className={`${item.nav_link.url === pathname && "text-accent border-accent border-b-2"} hover:text-accent font-medium capitalize transition-all`}
        >
          {item.nav_title}
        </PrismicNextLink>
      ))}
    </nav>
  );
};

export default Nav;
