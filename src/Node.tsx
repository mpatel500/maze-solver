import type { NodeProps } from "./types/components";
import { useState } from "react";

const Node = ({ cellType, row, col }: NodeProps) => {
  const [color, setColor] = useState(cellType);

  const handleClick = () => {
    setColor("start");
  };

  return (
    <div
      key={`row-${row}-col-${col}`}
      className={`node node-${color}`}
      onClick={handleClick}
    ></div>
  );
};

export default Node;
