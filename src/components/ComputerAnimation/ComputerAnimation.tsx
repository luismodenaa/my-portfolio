import { ClassNames } from "@emotion/react";
import Lottie from "react-lottie";
import animationData from "../../animations/computer.json";

export const ComputerAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="hidden md:block">
      <div className="pointer-events-none absolute blur-lg opacity-40">
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          isStopped={false}
          isPaused={false}
        />
      </div>
      <div className="pointer-events-none">
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          isStopped={false}
          isPaused={false}
        />
      </div>
    </div>
  );
};
