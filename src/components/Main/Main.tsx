import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <div className="flex items-center justify-center flex-col gap-60 ">
      {children}
    </div>
  );
};
