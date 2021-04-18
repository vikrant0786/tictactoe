import React,{useState} from "react";
import Board  from './components/Board';
import { calculateWinner } from "./helper";
import './styles/root.scss';
const App= () => {

  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext,setIsNext] =useState(false);
  
  const winner = calculateWinner(board);
  const message= winner ? `Winner is ${winner}`: `Next player is ${isXNext? 'X' : 'O'}`;
  const handelSquareClick = position => {
 
    if(board[position]||winner)
    return;
    setBoard(prev => {

      return prev.map((square,pos) => {

        if (pos === position) {

          return isXNext ? 'X' :'O';

        }
        return square;

      });

    });
    setIsNext( (prev)  => !(prev));
  };

  return(<div className='app'>
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={board} handelSquareClick={handelSquareClick}/>
  </div>);
};
export default App;
