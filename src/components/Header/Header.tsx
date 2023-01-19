import logo from "../../assets/modenaLogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header
      className="flex justify-around items-center p-8 gap-40 sm:gap-0 fixed top-0 right-0 left-0 z-10 bg-background-page"
      data-aos="fade-down"
    >
      <img src={logo} alt="modena" className="w-20 sm:w-28" />

      <AnimatePresence initial={false}>
        {menuIsOpen ? (
          <div className="relative">
            <IoCloseSharp
              className="text-white  block sm:hidden cursor-pointer icon-aument"
              onClick={() => {
                setMenuIsOpen(false);
              }}
            />
            <motion.div
              key={"menu"}
              initial={{ opacity: 0, translateY: -5 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 "
            >
              <div className="bg-[#161413] rounded-md p-4 px-5 sm:hidden">
                <div className="flex items-center gap-4 flex-col">
                  <a
                    className="font-semibold text-xs text-white hover:bg-gradient-to-r hover:from-color-pink hover:to-color-purple hover:text-gradient "
                    href="#initial"
                  >
                    Inicio
                  </a>
                  <a
                    className="font-semibold text-xs text-white hover:bg-gradient-to-r hover:from-color-pink hover:to-color-purple hover:text-gradient "
                    href="#about"
                  >
                    Sobre
                  </a>
                  <a
                    className="font-semibold text-xs text-white hover:bg-gradient-to-r hover:from-color-pink hover:to-color-purple hover:text-gradient "
                    href="#project"
                  >
                    Projetos
                  </a>
                  <a
                    className="font-semibold text-xs text-white hover:bg-gradient-to-r hover:from-color-pink hover:to-color-purple hover:text-gradient "
                    href="#contact"
                  >
                    Contato
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <GiHamburgerMenu
            className="text-white block sm:hidden cursor-pointer icon-aument"
            onClick={() => {
              !menuIsOpen ? setMenuIsOpen(true) : null;
            }}
          />
        )}
      </AnimatePresence>

      <div className="hidden items-center gap-8 sm:flex">
        <a
          className="font-semibold sm:text-xl text-white hover:bg-gradient-to-r hover:from-color-pink hover:to-color-purple hover:text-gradient "
          href="#initial"
        >
          Inicio
        </a>
        <a
          className="font-semibold sm:text-xl text-white hover:bg-gradient-to-r hover:from-color-pink hover:to-color-purple hover:text-gradient "
          href="#about"
        >
          Sobre
        </a>
        <a
          className="font-semibold sm:text-xl text-white hover:bg-gradient-to-r hover:from-color-pink hover:to-color-purple hover:text-gradient "
          href="#project"
        >
          Projetos
        </a>
        <a
          className="font-semibold sm:text-xl text-white hover:bg-gradient-to-r hover:from-color-pink hover:to-color-purple hover:text-gradient "
          href="#contact"
        >
          Contato
        </a>
      </div>
    </header>
  );
};
