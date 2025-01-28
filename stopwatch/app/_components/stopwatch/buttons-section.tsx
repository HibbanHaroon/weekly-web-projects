import { Button } from "@/app/_components";
import { MouseEventHandler } from "react";

interface Props {
  isTicking: boolean;
  onStart: MouseEventHandler<HTMLButtonElement>;
  onStop: MouseEventHandler<HTMLButtonElement>;
  onReset: MouseEventHandler<HTMLButtonElement>;
}

export function ButtonsSection(props: Props) {
  return (
    <div>
      <Button
        label="Start"
        onClick={props.onStart}
        disabled={props.isTicking}
      ></Button>
      <Button
        label="Stop"
        onClick={props.onStop}
        disabled={!props.isTicking}
      ></Button>
      <Button label="Reset" onClick={props.onReset}></Button>
    </div>
  );
}
