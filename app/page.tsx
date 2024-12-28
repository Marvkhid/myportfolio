import React from "react";
import AboutMe from "./Components/AboutMe";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";






export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
     <Contact />
   
     </main>
  );
}
