/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    let com = (path, start) => {
        if(path.length == k){
            result.push([...path]);
            return
        }
        for(let i = start; i <= n; i++){
            path.push(i);
                com(path, i+1);
            path.pop();
        }
    }
    com([], 1)
    return result;
};