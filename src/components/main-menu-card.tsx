import { useState } from "react";
import "./main-menu.scss";

enum SelectedMenu {
  Play,
  Default,
  Rules,
}

export default function MainMenuCard() {
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenu>(
    SelectedMenu.Default
  );
  const [numberOfDisks, setNumberOfDisks] = useState<number>(3);

  function switchMode(newSelectedMenu: SelectedMenu) {
    setSelectedMenu(newSelectedMenu);
  }

  switch (selectedMenu) {
    case SelectedMenu.Play:
      return (
        <>
          <h1 className="game-title">Hannoi Tower - Play</h1>
          <div className="main-card">
            <h1 className="title">Number of disks : {numberOfDisks}</h1>
            <input type="range" min="1" max="8" value={numberOfDisks} onChange={(e) => setNumberOfDisks(parseInt(e.target.value))}/>
            <button
              className="bottom-btn"
              onClick={() => switchMode(SelectedMenu.Default)}
            >
              Play
            </button>
          </div>
        </>
      );
    case SelectedMenu.Rules:
      return (
        <>
          <h1 className="game-title">Hannoi Tower - Rules</h1>
          <div className="main-card">
            <h1 className="title">Rules</h1>
            <p className="rules-text">
              The objective of the puzzle is to move the entire stack to another
              rod, obeying the following simple rules:
              <ul>
                <li>Only one disk can be moved at a time.</li>
                <li>
                  Each move consists of taking the upper disk from one of the
                  stacks and placing it on top of another stack or on an empty
                  rod.
                </li>
                <li>No larger disk may be placed on top of a smaller disk.</li>
              </ul>
            </p>
            <button
              className="bottom-btn"
              onClick={() => switchMode(SelectedMenu.Default)}
            >
              Close
            </button>
          </div>
        </>
      );
    default:
      return (
        <>
          <h1 className="game-title">Hannoi Tower</h1>
          <div className="main-card">
            <button
              className="play-btn"
              onClick={() => switchMode(SelectedMenu.Play)}
            >
              Play
            </button>

            <button
              className="bottom-btn"
              onClick={() => switchMode(SelectedMenu.Rules)}
            >
              Rules
            </button>
          </div>
        </>
      );
  }
}
