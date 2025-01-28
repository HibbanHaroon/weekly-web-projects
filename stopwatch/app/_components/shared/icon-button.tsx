import { MouseEventHandler, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export function IconButton({ icon, onClick, disabled }: Props) {
  return (
    <button
      className="w-10 h-10 flex justify-center items-center rounded-full border shadow-md hover:bg-white hover:shadow-lg focus:hover-white-600 focus:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none transition-all group"
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="w-5 h-5 group-hover:text-black">{icon}</span>}
    </button>
  );
}
