import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = [];
        for (let i = location.row - 2; i <= location.row + 2; i += 2) {
            if (i !== location.row) {
                availableMoves.push(Square.at(i, location.col + 1), Square.at(i, location.col - 1))
            }
        }
        for (let i = location.col - 2; i <= location.col + 2; i += 2) {
            if (i !== location.col) {
                availableMoves.push(Square.at(location.row + 1, i), Square.at(location.row - 1, i))
            }
        }
        return availableMoves;
    }
}
