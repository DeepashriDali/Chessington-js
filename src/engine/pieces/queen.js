import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';
import Board from '../board';
import LineMoves from './linemoves';
import Player from '../player';


export default class Queen extends LineMoves {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let diagonalArray = super.moveDiagonal();
        let lateralArray = super.moveLateral();
        availableMoves.push(diagonalArray);
        return this.availableMoves
    }
}

