export type NodeType =
  | "wall"
  | "path"
  | "start"
  | "end"
  | "visited"
  | "current";

export type NodeProps = {
  row: number;
  col: number;
  cellType: NodeType;
  handleClick: (row: number, col: number) => void;
};
