import { SelectedMenu } from "../main-menu-card";

type DefaultMenuProps = {
  switchMode: (newSelectedMenu: SelectedMenu) => void;
};

export default function DefaultMenu({ switchMode }: DefaultMenuProps) {
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
