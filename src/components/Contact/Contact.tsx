import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";

export const Contact = () => {
  return (
    <div
      className="flex flex-col items-center gap-5 p-5  mb-56"
      id="contact"
      data-aos="zoom-in-up"
    >
      <h3 className="text-color-purple text-3xl font-semibold">Contato</h3>
      <div className="flex flex-col md:flex-row gap-4 w-[100%]">
        <div className="bg-grey-5 p-2 w-[17.5rem] rounded flex flex-col gap-2">
          <h3 className="text-white font-semibold flex items-center gap-1">
            <BsLinkedin className="text-color-purple" /> Linkedin
          </h3>
          <a
            href="https://www.linkedin.com/in/luis-gabriel-lopes-modena-30639b231/"
            target={"_blank"}
            className="text-grey-2 underline decoration-color-purple"
          >
            Luis Gabriel Lopes Modena
          </a>
        </div>
        <div className="bg-grey-5 p-2 w-[17.5rem] rounded flex flex-col gap-2">
          <h3 className="text-white font-semibold flex items-center gap-1">
            <MdEmail className="text-color-purple" /> E-mail
          </h3>
          <a className="text-grey-2 ">luisgabriel.modena326@gmail.com</a>
        </div>
        <div className="bg-grey-5 p-2 w-[17.5rem] rounded flex flex-col gap-2">
          <h3 className="text-white font-semibold flex items-center gap-1">
            <FaMapPin className="text-color-purple" /> Localização
          </h3>
          <a className="text-grey-2 ">Tupã - SP</a>
        </div>
      </div>
    </div>
  );
};
