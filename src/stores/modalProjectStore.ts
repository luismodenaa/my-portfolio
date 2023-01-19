import create from "zustand";
import { IProjects } from "./projectsStore";

interface IModalStoreProps {
  project: IProjects;
  isOpen: boolean;
  openModal: (project: IProjects) => void;
  closeModal: () => void;
}

export const modalProjectStore = create<IModalStoreProps>((set) => ({
  project: <IProjects>{},
  isOpen: false,
  openModal: (project) => {
    set(() => ({ isOpen: true, project: project }));
  },
  closeModal: () => {
    set(() => ({ isOpen: false }));
  },
}));
