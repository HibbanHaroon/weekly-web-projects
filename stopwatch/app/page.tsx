"use client";

import { ButtonsSection, Timer } from "@/app/_components";
import { useTime } from "@/app/_hooks";

export default function Home() {
  const { time, isTicking, handleStart, handleStop, handleReset } = useTime();
  return (
    <div>
      <ButtonsSection
        isTicking={isTicking}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      ></ButtonsSection>
      <Timer time={time}></Timer>
    </div>
  );
}
