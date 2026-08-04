/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let heap = new MinPriorityQueue(x => x.val);
    let n = matrix[0].length;
    for(let i = 0; i < n; i++){
        heap.push({val: matrix[i][0], row: i, col: 0})
    }
    for(let count = 0; count < k-1; count++){
        let {val, row, col} = heap.pop();
        if(col + 1 < n){
            heap.push({val:matrix[row][col + 1], row: row, col: col + 1});
        }
        
    }
    return heap.pop().val
};