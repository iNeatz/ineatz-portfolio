"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

const MobileNav = ({ settings }) => {
  const pathname = usePathname();
  const { navigation: navLinks } = settings.data;

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mb-20 mt-32 text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ashwin <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <PrismicNextLink
              field={link.nav_link}
              key={`${index}-${link.nav_title}`}
              className={`${link.nav_link.url === pathname && "border-b-2 border-accent text-accent"}  text-xl capitalize transition-all hover:text-accent`}
            >
              {link.nav_title}
            </PrismicNextLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
