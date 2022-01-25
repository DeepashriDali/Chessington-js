
import 'chai/register-should';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('King', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move laterally', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(1, 2), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            // Horizontal
            Square.at(1, 1),  Square.at(1, 3), 
            // Vertical
            Square.at(0, 2),  Square.at(2, 2), 
       // Top Left
       Square.at(2, 1), 
       // Top Right
       Square.at(2, 3), 
       // Bottom Left
       Square.at(0, 1), 
       // Bottom Right
       Square.at(0, 3)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(1, 2), king);

        const moves = king.getAvailableMoves(board);

        moves.should.have.length(8);
    });
});
