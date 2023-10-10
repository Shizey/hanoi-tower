type PlayMenuProps = {
  numberOfDisks: number;
  setNumberOfDisks: (numberOfDisks: number) => void;
  setGameStarted: (gameStarted: boolean) => void;
};

export default function PlayMenu({
  numberOfDisks,
  setNumberOfDisks,
  setGameStarted,
}: PlayMenuProps) {
  return (
    <>
      <h1 className="game-title">Hannoi Tower - Play</h1>
      <div className="main-card">
        <h1 className="title">Number of disks : {numberOfDisks}</h1>
        <input
          type="range"
          min="3"
          max="8"
          value={numberOfDisks}
          onChange={(e) => setNumberOfDisks(parseInt(e.target.value))}
        />
        <button className="bottom-btn" onClick={() => setGameStarted(true)}>
          Play
        </button>
      </div>
    </>
  );
}
