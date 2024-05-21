import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/Header/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Ashwin Shrestha | My Portfolio",
  description:
    "Explore the portfolio of Ashwin Shrestha, a skilled Fullstack Web Developer with expertise in building dynamic, responsive web applications. Discover innovative projects, versatile skills, and a passion for creating seamless digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
