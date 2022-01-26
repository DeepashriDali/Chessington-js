import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';
import Bishop from './bishop';
import Rook from './rook';


export default class Queen extends Rook, Bishop {
    constructor(player) {
        super(player);
    }

    
}

