type ScoreProps = {
  reset(): void;
  moves: number;
  minMove: number;
};

export default function Score({ reset, moves, minMove }: ScoreProps) {
  return (
    <div className="score">
      <h1>Moves : {moves}</h1>
      <h1>Min Moves : {minMove} </h1>
      <button onClick={reset}>Reset</button>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Quit
      </button>
    </div>
  );
}
