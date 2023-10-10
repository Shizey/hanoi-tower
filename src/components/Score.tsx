type ScoreProps = {
    moves: number;
    minMoves: number;
}

export function Score({ moves, minMoves }: ScoreProps) {
    return (
        <div className="score">
            <h1>Moves : {moves}</h1>
            <h1>Min Moves : {minMoves} </h1>
            <button>Reset</button>
            <button>Quit</button>
        </div>
    )
}