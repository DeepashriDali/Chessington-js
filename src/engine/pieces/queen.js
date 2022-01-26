
import LineMover from './lineMover';

export default class Queen extends LineMover {
    constructor(player) {
        super(player);
    }
    getAvailableMoves(board){
        return super.getLinearMoves(board) 
    }
    getAvailableMoves(board){
      return super.getDiagonalMoves(board);
    }
  
}


