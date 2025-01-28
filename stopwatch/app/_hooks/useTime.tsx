import { useState, useEffect } from "react";
import { formatTimeInHHMMSS } from "@/app/_utils";

export function useTime() {
  const [time, setTime] = useState(0);
  const [isTicking, setIsTicking] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isTicking) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTicking, time]);

  function handleStart() {
    setIsTicking(true);
  }

  function handleStop() {
    setIsTicking(false);
  }

  function handleReset() {
    setIsTicking(false);
    setTime(0);
  }

  return {
    time: formatTimeInHHMMSS(time),
    isTicking,
    handleStart,
    handleStop,
    handleReset,
  };
}
