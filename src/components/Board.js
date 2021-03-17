import React from 'react'
import Square from './Square';
const Board = () => {
    return (
        <div>
            <div>
                <Square val={0}/>
                <Square val={1}/>
                <Square val={2}/>
            </div>
            <div>
                <Square val={3}/>
                <Square val={4}/>
                <Square val={5}/>
            </div>
            <div>
                <Square val={6}/>
                <Square val={7}/>
                <Square val={8}/>
            </div>
        </div>
    )
}

export default Board
