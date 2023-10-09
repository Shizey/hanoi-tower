import { useEffect, useState } from "react";
import "./board.scss";
import { Rod } from "./Rod";
import { Score } from "./Score";

type BoardProps = {
  numberOfDisks: number;
};

export function Board({ numberOfDisks }: BoardProps) {
  const [rods, setRods] = useState<number[][]>([]);

  useEffect(() => {
    const newRods: number[][] = [[], [], []];
    for (let i = 0; i < numberOfDisks; i++) {
      newRods[0].push(i);
    }
    setRods(newRods);
  }, [numberOfDisks]);

  return (
    <>
    <div className="game-board">
      <Rod rod={rods[0]} />
      <Rod rod={rods[1]} />
      <Rod rod={rods[2]} />
    </div>
    <Score />
    </>
  );
}
