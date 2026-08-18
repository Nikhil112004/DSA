/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(arr) {
    let result = [];
    arr.sort((a,b) => (a-b));
    let backtrack = (path, choices) => {
        if(path.length === arr.length){
            result.push([...path]);
            return;
        }
        for(let i=0; i < choices.length; i++){
            if(i > 0 && choices[i] === choices[i-1])continue;
            path.push(choices[i]);
            backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)]);
            path.pop();
        }
    }
    backtrack([], arr);
    return result;
};