import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

import Navbar from "./components/index components/navbar";
import Main_tittle from "./components/index components/main_tittle";
import About from "./components/index components/about";
import Skills_bar from "./components/index components/about_components/skills_bar";
import Help_card from "./components/index components/about_components/Help_card";
import Learning_card from "./components/index components/about_components/learning_card";
import WhyMe_card from "./components/index components/about_components/whyMe_card";
import Proyects from "./components/index components/proyects";
import Contact from "./components/index components/contact";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface IndexLayoutProps {
  children: ReactNode; // Declara que children es de tipo ReactNode
}

function IndexLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Main_tittle />
      <About />
      <div className="flex flex-col xl:flex-row"> 
        <Help_card/>
        <WhyMe_card />
        <Learning_card />
      </div>
      <Skills_bar />
      <Proyects />
      <Contact/>
      {children}
    </div>
  );
}

export default IndexLayout;
