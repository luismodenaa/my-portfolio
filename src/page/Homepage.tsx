import { About } from "../components/About/About";
import { Apresentation } from "../components/Apresentation/Apresentation";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Projects } from "../components/Projects/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Homepage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Apresentation />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Main>
    </>
  );
};
