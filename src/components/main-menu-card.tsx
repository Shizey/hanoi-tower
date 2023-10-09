import "./main-menu.scss";

export default function MainMenuCard() {
  return (
    <>
      <h1 className="game-title">Hannoi Tower</h1>
      <div className="main-card">
        <button className="play-btn">Play</button>

        <button className="rules-btn">Rules</button>
      </div>
    </>
  );
}
