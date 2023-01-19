import { ComputerAnimation } from "../ComputerAnimation/ComputerAnimation";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Apresentation = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div
      className="flex flex-row items-center gap-14 p-5 mt-72"
      id="initial"
      data-aos="flip-up"
    >
      <div className="flex flex-col gap-3 justify-start">
        <h2 className="text-grey-2 text-2xl font-semibold">Olá, eu sou</h2>
        <h3 className="text-4xl font-bold bg-gradient-to-r from-color-pink to-color-purple text-gradient ">
          Luis Gabriel Modena
        </h3>
        <p className="text-grey-2 text-lg font-semibold">
          Desenvolvedor Front-End
        </p>
        <a
          href="#project"
          className=" text-center bg-grey-1 duration-300 p-3 rounded-md font-medium text-lg text-white shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-color-purple/100"
        >
          Conheça meus projetos
        </a>
      </div>
      <ComputerAnimation />
    </div>
  );
};
