/* Задание 1. */
const boardSettings = {
    rowCount: 8,
    colCount: 8,
    evenCells: '#f5f5f5',
    oddCellsColor: '#080501',
    startOddCells: 'a1',
    chessBoard() {
        const limit = 8;
        let result = '';
        for (let i = 0; i< limit; i++) {
            for (let j = 0; j < limit; j++) {
                if (i % 2 !== 0) {
                    result += j % 2 === 0 ? boardSettings.evenCells : boardSettings.oddCellsColor
                } else {
                    result += j % 2 === 0 ? boardSettings.oddCellsColor : boardSettings.evenCells
                }
            }
            result += '\n'
        }
        return result
    },
};






/* Задание 2. */

const cartItems = {

}