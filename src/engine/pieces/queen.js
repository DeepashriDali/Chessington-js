import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = [];
        let boardLength = GameSettings.BOARD_SIZE;
        /* for (let i = 0, j = 0; i < boardLength; i++, j++) {
            if (i !== location.row && j !== location.col){
            availableMoves.push(Square.at(i, j + 1));
            }
        } */
        for (let i = 0; i < boardLength; i++) {
            if (i !== location.col) {
            availableMoves.push(Square.at(location.row, i));
            }
        }
        for (let i = 0; i < boardLength; i++) {
            if (i !== location.row) {
            availableMoves.push(Square.at(i, location.col));
            }
        }
        return availableMoves;
    }
}
