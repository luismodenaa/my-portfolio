import { modalProjectStore } from "../../stores/modalProjectStore";
import { IProjects } from "../../stores/projectsStore";

interface ICardsProps {
  project: IProjects;
}

export const CardProjects = ({ project }: ICardsProps) => {
  const [openModal] = modalProjectStore((state) => [state.openModal]);

  return (
    <li
      onClick={() => openModal(project)}
      className="relative w-56 border-2 border-grey-4 rounded-md hover:border-color-purple cursor-pointer"
    >
      <div className="rounded-md opacity-0 hover:opacity-100 w-full h-full top-0 bottom-0 absolute duration-300 background-card">
        <h3 className="absolute bottom-0 p-5 font-bold text-base bg-gradient-to-r from-color-pink to-color-purple text-gradient">
          {project.name}
        </h3>
        <p className="absolute bottom-0 pl-5 font-normal text-sm text-grey-2 mb-1">
          Website
        </p>
      </div>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-md"
      />
    </li>
  );
};
