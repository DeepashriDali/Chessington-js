import Piece from './piece';
import Square from '../square';


export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = [];
        for (let i = location.row+1, j=location.col+1; i < 8 || j<8; i++, j++) {
            availableMoves.push(Square.at(i, j));
            }
              
        return availableMoves;
    }
}