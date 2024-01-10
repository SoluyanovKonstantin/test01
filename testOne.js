/**
 * Вычисляем номер полосы забора откуда будет дешевле всего выломать k полос
 * @param {number} n - длина забора
 * @param {Array<number>} h - массив высот каждой полосы забора
 * @param {number} k - количество полос которые надо выломать
 */
function minimalPriceCount(n, h, k) {
    let minimalPrice;
    let minimalPriceIndex = 0;
    let firstBoardHeight = h[minimalPriceIndex];
    h.reduce((heightsSum, boardHeight, index) => {
        if (index + 1 < k) {
            return heightsSum + boardHeight;
        }
        if (index + 1 === k) {
            minimalPrice = heightsSum + boardHeight;
            return minimalPrice;
        }

        const currentHeight = heightsSum - firstBoardHeight + boardHeight;
        const firstBoardHeightIndex = index - k + 1; 

        if (currentHeight < minimalPrice) {
            minimalPrice = currentHeight;
            minimalPriceIndex = firstBoardHeightIndex;
        }

        firstBoardHeight = h[firstBoardHeightIndex];
        return currentHeight;
    }, 0)

    return minimalPriceIndex + 1;
}

console.log(minimalPriceCount(7, [1, 2, 6, 1, 1, 7, 1], 3))