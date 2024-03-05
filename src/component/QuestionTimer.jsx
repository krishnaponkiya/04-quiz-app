import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTIme] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, timeout]);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTIme((prevReamingTime) => prevReamingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
