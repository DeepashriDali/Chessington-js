import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        
        let availableMoves = [];
        for (let i = location.row+1, j = location.col+1; i<8, j<8; i++,j++ )
        {                  
                    availableMoves.push(Square.at(i, j));
        }
        for (let i = location.row+1, j = location.col-1; i<8, j>0; i++,j-- )
        {                  
                    availableMoves.push(Square.at(i, j));
        }
        for (let i = location.row-1, j = location.col-1; i>0, j>0; i--,j-- )
        {                  
                    availableMoves.push(Square.at(i, j));
        }
        for (let i = location.row-1, j = location.col+1; i>0, j<8; i--,j++ )
        {                  
                    availableMoves.push(Square.at(i, j));
        }
              
        return availableMoves;
    }
}