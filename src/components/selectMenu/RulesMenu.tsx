import { SelectedMenu } from "../main-menu-card";

type RulesMenuProps = {
  switchMode: (newSelectedMenu: SelectedMenu) => void;
};

export default function RulesMenu({ switchMode }: RulesMenuProps) {
  return (
    <>
      <h1 className="game-title">Hannoi Tower - Rules</h1>
      <div className="main-card">
        <h1 className="title">Rules</h1>
        <p className="rules-text">
          The objective of the puzzle is to move the entire stack to the last
          rod, obeying the following simple rules:
          <ul>
            <li>Only one disk can be moved at a time.</li>
            <li>
              Each move consists of taking the upper disk from one of the stacks
              and placing it on top of another stack or on an empty rod.
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
}
