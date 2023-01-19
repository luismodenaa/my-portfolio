import { AiOutlineGithub } from "react-icons/ai";
import { projectsStore } from "../../stores/projectsStore";
import { CardProjects } from "../CardProjects/CardProjects";
import { ModalProject } from "../ModalProject/ModalProject";

export const Projects = () => {
  const [myProjects] = projectsStore((state) => [state.myProjects]);

  return (
    <>
      <div
        className="flex flex-col items-center gap-5 p-5 "
        data-aos="zoom-out"
        id="project"
      >
        <div className="text-center flex flex-col gap-6">
          <h3 className="text-color-purple text-3xl font-semibold">Projetos</h3>
          <ul className=" grid grid-rows-4 sm:grid-rows-2 grid-flow-col gap-6">
            {myProjects.map((element) => (
              <CardProjects project={element} key={element.name} />
            ))}
          </ul>
        </div>
        <a
          href="https://github.com/luismodenaa"
          target={"_blank"}
          className="cursor-pointer flex items-center justify-center gap-2 px-10 bg-grey-1 duration-300 p-3 rounded-md font-normal text-base text-white shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-color-purple/100"
        >
          Repositórios <AiOutlineGithub />
        </a>
      </div>
      <ModalProject />
    </>
  );
};
