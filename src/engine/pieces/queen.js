
import LineMover from './lineMover';

export default class Queen extends LineMover {
    constructor(player) {
        super(player);
    }
    getAvailableMoves(board){

      let lin = super.getLinearMoves(board) ;
      let dia = super.getDiagonalMoves(board) ;
      let queenMoves = lin.concat(dia);
        return queenMoves
    }

  
}


