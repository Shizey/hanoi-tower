import { useEffect, useState } from "react";
import "./board.scss";
import { Rod } from "./Rod";
import { Score } from "./Score";

type BoardProps = {
  numberOfDisks: number;
};

const diskClassName = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
];

export function Board({ numberOfDisks }: BoardProps) {
  const [rods, setRods] = useState<string[][]>([]);
  const [moves, setMoves] = useState<number>(0);

  useEffect(() => {
    const newRods: string[][] = [[], [], []];
    for (let i = 0; i < numberOfDisks; i++) {
      newRods[0].push(diskClassName[i]);
    }
    newRods[0].reverse();
    setRods(newRods);
  }, [numberOfDisks]);

  useEffect(() => {
    if (rods[2] && rods[2].length === numberOfDisks) {
      alert(`You won in ${moves} moves !`);
    }
  }, [rods, numberOfDisks, moves]);

  return (
    <>
      <div className="game-board">
        <Rod rods={rods} rodIndex={0} setRods={setRods} setMoves={setMoves} />
        <Rod rods={rods} rodIndex={1} setRods={setRods} setMoves={setMoves} />
        <Rod rods={rods} rodIndex={2} setRods={setRods} setMoves={setMoves} />
      </div>
      <Score moves={moves} minMoves={Math.pow(2, numberOfDisks) - 1} />
    </>
  );
}
