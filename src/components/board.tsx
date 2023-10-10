import { useEffect, useState } from "react";
import "./board.scss";
import { Rod } from "./Rod";
import "./modal.scss";
import WinModal from "./winmodal";

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
  const [win, setWin] = useState<boolean>(false);

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
      setWin(true);
    }
  }, [rods, numberOfDisks, moves]);

  function reset() {
    setMoves(0);
    const newRods: string[][] = [[], [], []];
    for (let i = 0; i < numberOfDisks; i++) {
      newRods[0].push(diskClassName[i]);
    }
    newRods[0].reverse();
    setRods(newRods);
  }

  return (
    <>
      <div className="game-board">
        <Rod rods={rods} rodIndex={0} setRods={setRods} setMoves={setMoves} />
        <Rod rods={rods} rodIndex={1} setRods={setRods} setMoves={setMoves} />
        <Rod rods={rods} rodIndex={2} setRods={setRods} setMoves={setMoves} />
      </div>
      <div className="score">
        <h1>Moves : {moves}</h1>
        <h1>Min Moves : {Math.pow(2, numberOfDisks) - 1} </h1>
        <button onClick={reset}>Reset</button>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Quit
        </button>
      </div>
      {win && (
        <WinModal moves={moves} minMoves={Math.pow(2, numberOfDisks) - 1} />
      )}
    </>
  );
}
