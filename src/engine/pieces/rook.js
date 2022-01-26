import LineMover from './lineMover';


export default class Rook extends LineMover {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board){
        return super.getLinearMoves(board);
    }
      
}