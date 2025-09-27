import "./styles.css";
import { useState, useEffect } from "react";
import type { NodeProps } from "./types/components";
import Node from "./Node";

const ROWS = 25;
const COLS = 30;

export default function App() {
  const [grid, setGrid] = useState<NodeProps[]>([]);

  useEffect(() => {
    const newGrid = createGrid();
    setGrid(newGrid);
  }, []);

  const createNode = (
    row: number,
    col: number,
    handleClick: (row: number, col: number) => void
  ): NodeProps => ({
    row,
    col,
    cellType: "path",
    handleClick,
  });

  const handleNodeClick = (row: number, col: number) => {
    const index = row * ROWS + col;
    const newGrid = [...grid];
    newGrid[index].cellType = "end";
    setGrid(newGrid);
  };

  const createGrid = () => {
    const initialGrid = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        initialGrid.push(createNode(row, col, handleNodeClick));
      }
    }
    return initialGrid;
  };

  return (
    <div className="App">
      <p>Maze Solver</p>
      <div className="grid-container">
        <div
          id="grid"
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gap: "1px",
          }}
        >
          {grid.map((node) => (
            <Node {...node} handleClick={handleNodeClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
