import { MouseEventHandler } from "react";

interface Props {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export function Button({ label, onClick, disabled }: Props) {
  return (
    <button className="p-4 rounded-md" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
