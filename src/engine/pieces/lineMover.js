import Piece from "./piece";
import Square from '../square';
import GameSettings from '../gameSettings';

export default class LineMover extends Piece {
    constructor(player) {
        super(player);
    }

    getDiagonalMoves(board){

       
            let location = board.findPiece(this)
            
            let availableMoves = [];
      //Top right
      for (let i = location.row+1, j = location.col+1; i <=7 ; i++,j++ )
      {      
          if(j<=7)     {
            availableMoves.push(Square.at(i, j));
          }       
                
      }
      //Top left
      for (let i = location.row+1, j = location.col-1; i<=7; i++,j-- )
      {        
          if(j>=0)      {
            availableMoves.push(Square.at(i, j));
          }    
            
      }
      //Bottom left
      for (let i = location.row-1, j = location.col-1; i>=0; i--,j-- )
      {    
        if(j>=0){
            availableMoves.push(Square.at(i, j));
        }
               
      }
      //Bottom right
          for (let i = location.row-1, j = location.col+1; i>=0; i--,j++) {   
              
            if(j<=7){
                availableMoves.push(Square.at(i, j));
            }
                  
      }
            return availableMoves;
        }
    
    getLinearMoves(board){
        
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

    getAvailableMoves(board){
        return new Array(0);
    }
}

