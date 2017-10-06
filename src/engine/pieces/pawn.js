import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)

        if (this.player === Player.WHITE && location !== Square.at(0,0)) {
            return Square.at(location.row + 1, location.col)
        } else {
            return Square.at(location.row - 1, location.col)
        }
    }
}