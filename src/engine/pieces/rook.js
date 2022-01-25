import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = [];
        for (let i = 0; i < 8; i++) {
            if (i !== location.col) {
            availableMoves.push(Square.at(location.row, i));
            }
        }
        for (let i = 0; i < 8; i++) {
            if (i !== location.row) {
            availableMoves.push(Square.at(i, location.col));
            }
        }
        return availableMoves;
    }
}
