import Modal from "react-modal";
import { modalProjectStore } from "../../stores/modalProjectStore";
import { AnimatePresence, motion } from "framer-motion";

export const ModalProject = () => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
      outline: "none",
    },
  };

  const [isOpen, closeModal, project] = modalProjectStore((state) => [
    state.isOpen,
    state.closeModal,
    state.project,
  ]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      className="fixed w-10/12 sm:w-[34rem]"
    >
      <motion.div
        key={"menu"}
        initial={{ opacity: 0, translateY: -5 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-grey-5 p-4 rounded-md flex flex-col gap-5 items-center"
      >
        <div className="flex flex-col gap-4 w-11/12">
          <h3 className="text-color-purple text-3xl font-semibold text-left">
            {project.name}
          </h3>
          <p className="text-color-orange font-medium">
            Descrição: <span className="text-grey-2">{project.about}</span>
          </p>
          {project.libs ? (
            <p className="text-color-orange font-medium">
              Bibliotecas: <span className="text-grey-2">{project.libs}</span>
            </p>
          ) : null}
        </div>
        <div className="inline-flex gap-4 w-[100%] justify-center">
          <a
            href={project.link}
            target={"_blank"}
            className="cursor-pointer bg-color-purple text-center p-2 px-[13%] flex-row duration-300  text-sm font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-color-purple/100"
          >
            Live demo
          </a>
          <button
            onClick={() => closeModal()}
            className="bg-grey-1 duration-300 p-2 px-[14%] font-medium text-sm  text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-color-purple/100"
          >
            Fechar
          </button>
        </div>
      </motion.div>
    </Modal>
  );
};
