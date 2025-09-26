import "./styles.css";
import { useState, useEffect } from "react";
import type { NodeType } from "./types/components";

const ROWS = 25;
const COLS = 30;

const createNode = (row: number, col: number): NodeType => ({
  row,
  col,
  isStart: false,
  isEnd: false,
  isWall: false,
  isVisited: false,
  isPath: false,
});

const createGrid = () => {
  const initialGrid = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      initialGrid.push(createNode(row, col));
    }
  }
  return initialGrid;
};

const handleClick = (event) => {
  console.log("clicked!");
};

const Node = (props: NodeType) => (
  <div className="node" onClick={handleClick}></div>
);

export default function App() {
  const [grid, setGrid] = useState<NodeType[]>([]);

  useEffect(() => {
    const newGrid = createGrid();
    setGrid(newGrid);
  }, []);

  return (
    <div className="App flex">
      <div
        id="grid-container"
        className="grid-container flex flex-wrap"
        style={{
          display: "grid", // <-- Essential!
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gap: "1px",
        }}
      >
        {grid.map((node) => (
          <Node {...node} />
        ))}
      </div>
    </div>
  );
}
