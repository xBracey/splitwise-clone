import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IButton {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `bg-contessa-700 hover:bg-contessa-900 rounded py-2 px-4 font-bold text-white transition-all hover:scale-105`,
        className
      )}
    >
      {children}
    </button>
  );
};
