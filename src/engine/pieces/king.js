import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = [
            Square.at(location.row + 1, location.col),
            Square.at(location.row - 1, location.col),
            Square.at(location.row , location.col +1),
            Square.at(location.row , location.col-1),
            Square.at(location.row + 1, location.col+1),
            Square.at(location.row + 1, location.col-1),
            Square.at(location.row - 1, location.col+1),
            Square.at(location.row - 1, location.col-1)
        ];
      return availableMoves;  
    }
    }
