import "./rod.scss";

type RodProps = {
  rod: number[];
};

const diskClassName = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

export function Rod({ rod }: RodProps) {

  return (
    <div className="RodContainer">
      <div className="VerticalRod" />
      <div className="HorizontalRod" />
      <div className="DiskContainer">
        {rod &&
          rod.map((diskSize) => {
            return (
              <div
                className={`slot${rod.length-diskSize-1 } ${
                  diskClassName[diskSize]
                }`}
              />
            );
          })}
      </div>
    </div>
  );
}
