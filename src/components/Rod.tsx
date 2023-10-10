import { useEffect } from "react";
import "./rod.scss";

type RodProps = {
  rods: string[][];
  rodIndex: number;
  setRods: (rods: string[][]) => void;
};

export function Rod({ rods, rodIndex, setRods }: RodProps) {
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
        console.log(rods);
        const rodContent = rods[parseInt(currentRod)];
        deleteOccurence(rods, disk);
        rodContent.push(disk);
        setRods([...rods]);
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

  function deleteOccurence(array: string[][], value: string) {
    for (let i = 0; i < array.length; i++) {
      const index = array[i].indexOf(value);
      if (index > -1) {
        array[i].splice(index, 1);
      }
    }
  }

  return (
    <div
      className="RodContainer"
      data-rod={rodIndex}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="VerticalRod" data-rod={rodIndex} />
      <div className="HorizontalRod" data-rod={rodIndex} />
      <div className="DiskContainer" data-rod={rodIndex}>
        {rod &&
          rod.map((diskSize, index) => {
            return (
              <div
                draggable
                data-disk={diskSize}
                className={`slot${index} ${diskSize} disk`}
              />
            );
          })}
      </div>
    </div>
  );
}
