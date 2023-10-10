import { useEffect } from "react";
import "./rod.scss";
import deleteOccurence from "../utils/deleteOccurence";

type RodProps = {
  rods: string[][];
  rodIndex: number;
  setRods: (rods: string[][]) => void;
  setMoves: React.Dispatch<React.SetStateAction<number>>;
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

export function Rod({ rods, rodIndex, setRods, setMoves }: RodProps) {
  const rod = rods[rodIndex];

  useEffect(() => {
    document.addEventListener("drop", onDrop);
    document.addEventListener("dragstart", onDragStart);
  });

  function onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      const disk = event.dataTransfer.getData("text/plain");
      const target = event.target as HTMLElement;
      const currentRod = target.dataset.rod;

      if (currentRod && target && rods.length > 0) {
        target.classList.remove("drag-over");
        const rodContent = rods[parseInt(currentRod)];
        const lastDisk = rodContent[rodContent.length - 1];
        if (
          !lastDisk ||
          diskClassName.indexOf(lastDisk) > diskClassName.indexOf(disk)
        ) {
          setMoves((moves) => moves + 1);
          deleteOccurence(rods, disk);
          rodContent.push(disk);
          setRods([...rods]);
        }
        event.stopImmediatePropagation();
      }
    }
  }

  function onDragStart(event: DragEvent) {
    const target = event.target as HTMLElement;
    if (target) {
      const disk = target.dataset.disk as string;
      if (event.dataTransfer && disk) {
        event.dataTransfer.setData("text/plain", disk);
      }
    }
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const target = e.target as HTMLElement;

    if (target) {
      target.classList.add("drag-over");
    }
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const target = e.target as HTMLElement;

    if (target) {
      target.classList.remove("drag-over");
    }
  }

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
