import { useEffect, useMemo, useState } from "react";
import "./board.scss";
import { Rod } from "./Rod";
import "./modal.scss";
import WinModal from "./winmodal";
import Score from "./score";

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
  const [tracking, setTracking] = useState<string>("");

  const minMove = useMemo(() => {
    return Math.pow(2, numberOfDisks) - 1;
  }, [numberOfDisks]);

  useEffect(() => {
    reset();
  }, [numberOfDisks]);

  useEffect(() => {
    if (rods[2] && rods[2].length === numberOfDisks) {
      setWin(true);
    }
  }, [rods, numberOfDisks]);

  function reset() {
    setMoves(0);
    const newRods: string[][] = [[], [], []];
    for (let i = 0; i < numberOfDisks; i++) {
      newRods[0].push(diskClassName[i]);
    }
    newRods[0].reverse();
    setRods(() => newRods);
  }

  return (
    <>
      <div className="game-board">
        {rods.map((_, index) => (
          <Rod
            key={index}
            rods={rods}
            rodIndex={index}
            setRods={setRods}
            setMoves={setMoves}
            tracking={tracking}
            setTracking={setTracking}
          />
        ))}
      </div>
      <Score minMove={minMove} reset={reset} moves={moves} />
      {win && <WinModal moves={moves} minMoves={minMove} />}
    </>
  );
}
