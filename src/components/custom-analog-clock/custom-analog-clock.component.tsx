import "./style.css";
import { CustomLabel } from "../custom-label/custom-label.component";
import { useEffect, useState } from "react";

type props = {
  border?: string;
};

const CustomAnalogClock = ({ border }: props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div
      className={`w-full h-full clock flex items-center justify-center ${
        border ? border : "border-8 border-dotted"
      }`}
    >
      <CustomLabel className="font-display text-[#9CA3AF]">
        {time.toLocaleTimeString()}
      </CustomLabel>
    </div>
  );
};

export default CustomAnalogClock;
