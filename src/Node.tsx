import type { NodeProps } from "./types/components";

const Node = ({ cellType, row, col, handleClick }: NodeProps) => {
  return (
    <div
      key={`row-${row}-col-${col}`}
      className={`node node-${cellType}`}
      onClick={() => handleClick(row, col)}
    ></div>
  );
};

export default Node;
