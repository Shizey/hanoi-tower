import './modal.scss'

type WinModalProps = {
    moves: number;
    minMoves: number;
}

export default function WinModal({moves, minMoves}: WinModalProps) {
    return (
        <div className="modal">
          <div className="modal-content">
            <h1>You Win !</h1>
            <p>
              You have completed the game in <b>{moves} moves</b>. The minimum number
              of moves required to complete the game is{" "}
              <b>{minMoves} moves</b>.
            </p>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Quit
            </button>
          </div>
        </div>
      )
}