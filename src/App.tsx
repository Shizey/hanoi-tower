import { useState } from "react";
import MainMenuCard from "./components/main-menu-card";
import { Board } from "./components/board";

function App() {
  const [numberOfDisks, setNumberOfDisks] = useState<number>(3);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  return (
    <>
      {gameStarted ? (
        <Board numberOfDisks={numberOfDisks} />
      ) : (
        <MainMenuCard
          numberOfDisks={numberOfDisks}
          setNumberOfDisks={setNumberOfDisks}
          setGameStarted={setGameStarted}
        />
      )}
    </>
  );
}

export default App;
