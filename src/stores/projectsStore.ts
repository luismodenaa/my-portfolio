import create from "zustand";
import kenziehub from "../assets/kenziehub.png";
import burguerkenzie from "../assets/burguerkenzie.png";
import nukenzie from "../assets/nukenzie.png";
import shape from "../assets/shape.png";

export interface IProjects {
  name: string;
  image: string;
  about: string;
  libs?: string;
  link: string;
}

interface IProjectProps {
  myProjects: IProjects[];
}

export const projectsStore = create<IProjectProps>((set) => ({
  myProjects: [
    {
      name: "Kenzie Hub",
      image: kenziehub,
      about:
        "Esse é um projeto feito do zero por mim, aonde é possivel cadastrar/logar um usuário, e ele registrar suas tecnologias com base no seu conhecimento. Foi um projeto feito em React e refatorado em TypeScript.",
      libs: "React Hook Form, React Router Dom, React Toastify, Yup Resolver, React Icons, Styled-components, Axios, Context-Api, React Modal e Framer Motion.",
      link: "https://kenziehubmodena.vercel.app",
    },
    {
      name: "Burguer Kenzie",
      image: burguerkenzie,
      about:
        "Esse é um projeto de um e-commerce de um hamburgueria, utilizando apenas alguns conceitos basicos do react como o useEffect, useState, dentre outros. Foi utilizado tambem a lib do axios para fazer a requisição dos produtos.",
      link: "https://burguerkenziemodena-luismodenaa.vercel.app",
    },
    {
      name: "NuKenzie",
      image: nukenzie,
      about:
        "Esse aqui é um projeto de finanças criado do 0 por mim, utilizando apenas alguns conceitos básicos do react.",
      link: "https://nukenziemodena.vercel.app",
    },
    {
      name: "Shape",
      image: shape,
      about:
        "Esse é um projeto feito em grupo como finalização do módulo de Desenvolvimento Front-End na Kenzie Academy Brasil. Atuei como TechLead no grupo, figma, ideia do projeto, e decisões de quais bibliotecas iriam ser utilizadas foi decidido por mim, ouvindo a opniões dos outros desenvolvedores do grupo. É uma aplicação para facilitar desenvolvedores a configurarem seu ambiente de trabalho, pretendemos ainda melhorar a aplicação, corrigir alguns problemas e construir um back-end próprio.",
      libs: "Tailwind, Zustand, Axios, AOS, React Lottie, React Rating, MaterialUI, React Hook Form, Yup, React Router Dom, React Modal, Framer Motion, React-Icons",
      link: "https://shapeforreact.vercel.app",
    },
  ],
}));
