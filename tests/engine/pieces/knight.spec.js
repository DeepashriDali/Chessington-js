import Knight from '../../../src/engine/pieces/knight';
import 'chai/register-should';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Knight', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move 2 spaces vertically/horizontally, then 1 space horizontally/vertically', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(3, 3), knight);

        const moves = knight.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(1, 2), Square.at(2, 1), Square.at(4, 1), Square.at(5, 2), Square.at(5, 4), Square.at(4, 5), Square.at(2, 5), Square.at(1, 4)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(3, 3), knight);

        const moves = knight.getAvailableMoves(board);

        moves.should.have.length(8);
    });
});
