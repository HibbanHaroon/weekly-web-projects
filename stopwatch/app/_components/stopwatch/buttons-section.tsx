import { IconButton } from "@/app/_components";
import { MouseEventHandler } from "react";
import {
  PlayIcon,
  PauseIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

interface Props {
  isTicking: boolean;
  onStart: MouseEventHandler<HTMLButtonElement>;
  onStop: MouseEventHandler<HTMLButtonElement>;
  onReset: MouseEventHandler<HTMLButtonElement>;
}

export function ButtonsSection(props: Props) {
  return (
    <div className="flex flex-row gap-4 mt-12">
      <IconButton
        icon={<PlayIcon />}
        onClick={props.onStart}
        disabled={props.isTicking}
      ></IconButton>
      <IconButton
        icon={<PauseIcon />}
        onClick={props.onStop}
        disabled={!props.isTicking}
      ></IconButton>
      <IconButton icon={<ArrowPathIcon />} onClick={props.onReset}></IconButton>
    </div>
  );
}
