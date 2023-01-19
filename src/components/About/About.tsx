import css from "../../assets/css.svg";
import html from "../../assets/html.svg";
import javasript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import typescript from "../../assets/typescript.svg";

export const About = () => {
  return (
    <div
      className="flex flex-col items-center gap-5 p-5"
      data-aos="fade-up"
      id="about"
    >
      <h3 className="text-color-purple text-3xl font-semibold">Sobre</h3>
      <div
        className=" text-center flex flex-col gap-5 sm:w-[32rem]"
        data-aos="zoom-in"
      >
        <p className="text-grey-2">
          Sou um desenvolvedor Front-End, atualmente cursando o curso da Kenzie
          Academy Brasil de Desenvolvimento Web Full-Stack.
        </p>
        <p className="text-grey-2">
          Meu interesse com a programação começou quando eu ainda era bem novo,
          tinha em torno dos 12 anos de idade. Agora em 2021 finalizando o
          Ensino Médio tive a oportunidade de entrar na área da programação.
        </p>
        <p className="text-grey-2">
          No momento quero sempre ir atrás de mais conhecimento, poder aprender
          um pouco de cada coisa e fazer grandes coisas com isto.
        </p>
      </div>
      <div
        className="flex flex-col items-center gap-4 mt-4 "
        data-aos="zoom-in"
      >
        <h3 className="text-color-orange text-2xl font-semibold">
          Habilidades
        </h3>
        <div className="grid grid-rows-3 sm:grid-rows-1 grid-flow-col items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <img src={html} alt="html" />
            <p className="text-grey-2 font-semibold text-sm">HTML5</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={css} alt="css" />
            <p className="text-grey-2 font-semibold text-sm">CSS3</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={javasript} alt="javascript" />
            <p className="text-grey-2 font-semibold text-sm">JavaScript</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={react} alt="react" />
            <p className="text-grey-2 font-semibold text-sm">React</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={typescript} alt="typescript" />
            <p className="text-grey-2 font-semibold text-sm">TypeScript</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={tailwind} alt="tailwind" />
            <p className="text-grey-2 font-semibold text-sm">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};
