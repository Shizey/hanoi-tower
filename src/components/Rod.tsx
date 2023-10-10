import { useEffect } from "react";
import "./rod.scss";
import handleDragAndDrop from "../utils/handleDragAndDrop";

type RodProps = {
  rods: string[][];
  rodIndex: number;
  setRods: React.Dispatch<React.SetStateAction<string[][]>>;
  setMoves: React.Dispatch<React.SetStateAction<number>>;
  tracking: string;
  setTracking: React.Dispatch<React.SetStateAction<string>>;
};

export function Rod({
  rods,
  rodIndex,
  setRods,
  setMoves,
  tracking,
  setTracking,
}: RodProps) {
  const rod = rods[rodIndex];

  useEffect(() => {
    document.addEventListener("drop", onDrop);
    document.addEventListener("dragstart", onDragStart);

    return () => {
      document.removeEventListener("drop", onDrop);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, [rods]);

  const { handleDragOver, handleDragLeave, onDrop, onDragStart } =
    handleDragAndDrop(rods, setRods, setMoves, setTracking, tracking);

  return (
    <div
      className="RodContainer"
      data-rod={rodIndex}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div className="VerticalRod" data-rod={rodIndex} />
      <div className="HorizontalRod" data-rod={rodIndex} />
      <div className="DiskContainer" data-rod={rodIndex}>
        {rod &&
          rod.map((diskSize, index) => {
            return (
              <div
                draggable={index === rod.length - 1}
                data-disk={diskSize}
                key={index}
                className={`slot${index} ${diskSize} ${
                  rod.length - 1 === index ? "drag" : ""
                }`}
              />
            );
          })}
      </div>
    </div>
  );
}
