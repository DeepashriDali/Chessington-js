import LineMover from './lineMover';

export default class Bishop extends LineMover {
    constructor(player) {
        super(player);
    }
getAvailableMoves(board){
    return super.getDiagonalMoves(board);
}
   
}