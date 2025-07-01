import React from "react";
import Footer from "@/components/Footer";
import WorkProcess from "@/components/WorkProcess";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <>
      <section id="hero" className="overflow-x-hidden mt-4">
        <Hero />
      </section>
      <section id="skills" className="overflow-x-hidden mt-0">
        <Skills />
      </section>
      <section id="about" className="overflow-x-hidden mt-4">
        <About />
      </section>
      <section id="myWorkProcess" className="overflow-x-hidden mt-0">
        <WorkProcess />
      </section>
      <section id="contact" className="overflow-x-hidden mt-4">
        <Contact />
      </section>
      <section id="footer" className="overflow-x-hidden mt-4 mb-2">
        <Footer />
      </section>
    </>
  );
};

export default Home;
