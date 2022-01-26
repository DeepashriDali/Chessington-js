import Bishop from '../../../src/engine/pieces/bishop';
import 'chai/register-should';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Bishop', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move diagonally', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(1, 2), bishop);
        // board.setPiece(Square.at(1, 2), bishop);
        const moves = bishop.getAvailableMoves(board);

        const expectedMoves = [
        // // Bottom Left
        Square.at(0, 1), 
        // // Bottom Right
        Square.at(0, 3), 
        //Top Left
        Square.at(2, 1), Square.at(3, 0),
        // Top Right
        Square.at(2, 3), Square.at(3, 4), Square.at(4, 5), Square.at(5, 6), Square.at(6, 7)
        
        ];

        // it('can move diagonally', () => {
        //     const bishop = new Bishop(Player.WHITE);
        //     board.setPiece(Square.at(3, 3), bishop);
        //     // board.setPiece(Square.at(1, 2), bishop);
        //     const moves = bishop.getAvailableMoves(board);
    
        //     const expectedMoves = [
        //                // Top Right
        //     Square.at(4, 4), Square.at(5, 5), Square.at(6, 6), Square.at(7, 7),
        //         //Top Left
        //         Square.at(4, 2),   Square.at(5, 1),   Square.at(6, 0), 
        //     // // Bottom Left
        //     Square.at(2, 2),    Square.at(1, 1),    Square.at(0, 0),
        //     // // Bottom Right
        //     Square.at(2, 4),   Square.at(1, 5),   Square.at(0, 6) 
    
            
        //     ];
        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(1, 2), bishop);

        const moves = bishop.getAvailableMoves(board);

        moves.should.have.length(9);
    });
});
