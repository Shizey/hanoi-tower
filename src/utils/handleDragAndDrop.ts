import deleteOccurence from "./deleteOccurence";

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

export default function handleDragAndDrop(
  rods: string[][],
  setRods: React.Dispatch<React.SetStateAction<string[][]>>,
  setMoves: React.Dispatch<React.SetStateAction<number>>,
  setTracking: React.Dispatch<React.SetStateAction<string>>,
  tracking: string
) {
  function onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      const disk = event.dataTransfer.getData("text/plain");
      const target = event.target as HTMLElement;
      const currentRod = target.dataset.rod;

      target.classList.remove("drag-over");
      target.classList.remove("drag-over-error");

      if (currentRod && target && rods.length > 0) {
        const rodContent = rods[parseInt(currentRod)];
        const lastDisk = rodContent[rodContent.length - 1];
        if (
          !lastDisk ||
          diskClassName.indexOf(lastDisk) > diskClassName.indexOf(disk)
        ) {
          setMoves((moves) => moves + 1);
          deleteOccurence(rods, disk);
          rodContent.push(disk);
          setRods(() => [...rods]);
        }
        setTracking("");
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
        setTracking(disk);
      }
    }
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const target = e.target as HTMLElement;

    if (target) {
      target.classList.add("drag-over");
      const currentRodIndex = target.dataset.rod;
      const rod = rods[parseInt(currentRodIndex as string)] || [];
      if (
        rod.length > 0 &&
        diskClassName.indexOf(tracking) >
          diskClassName.indexOf(rod[rod.length - 1])
      ) {
        target.classList.add("drag-over-error");
      } else {
        target.classList.add("drag-over");
      }
    }
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const target = e.target as HTMLElement;

    if (target) {
      target.classList.remove("drag-over");
      target.classList.remove("drag-over-error");
    }
  }

  return { onDrop, onDragStart, handleDragOver, handleDragLeave };
}
