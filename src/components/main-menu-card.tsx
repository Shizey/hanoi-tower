import { useState } from "react";
import "./main-menu.scss";
import PlayMenu from "./selectMenu/PlayMenu";
import RulesMenu from "./selectMenu/RulesMenu";
import DefaultMenu from "./selectMenu/DefaultMenu";

// eslint-disable-next-line react-refresh/only-export-components
export enum SelectedMenu {
  Play,
  Default,
  Rules,
}

type MainMenuCardProps = {
  numberOfDisks: number;
  setNumberOfDisks: (numberOfDisks: number) => void;
  setGameStarted: (gameStarted: boolean) => void;
};

export default function MainMenuCard({
  numberOfDisks,
  setNumberOfDisks,
  setGameStarted,
}: MainMenuCardProps) {
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenu>(
    SelectedMenu.Default
  );

  function switchMode(newSelectedMenu: SelectedMenu) {
    setSelectedMenu(newSelectedMenu);
  }

  switch (selectedMenu) {
    case SelectedMenu.Play:
      return (
        <PlayMenu
          numberOfDisks={numberOfDisks}
          setNumberOfDisks={setNumberOfDisks}
          setGameStarted={setGameStarted}
        />
      );

    case SelectedMenu.Rules:
      return <RulesMenu switchMode={switchMode} />;
    default:
      return <DefaultMenu switchMode={switchMode} />;
  }
}
