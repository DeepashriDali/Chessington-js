import Piece from './piece';
import Square from '../square';
import Board from '../board';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = [];
        let boardLength = GameSettings.BOARD_SIZE;
        //change to function or forEach
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