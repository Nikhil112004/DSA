/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    
    let backtrack = (path, remainingStr) => {
         if(!remainingStr.length){
            result.push([...path]);
         }
         for(let i = 1; i <= remainingStr.length; i++){
             let choices = remainingStr.substring(0, i);
             if(!isPallindrome(choices)) continue;
            path.push(choices);
            backtrack(path, remainingStr.substring(i));
            path.pop();
         }
    }
    backtrack([], s);
    return result;
};

let isPallindrome = (s) => {
 let i = 0;
 let j = s.length - 1;
 while(i < j){
    if(s[i++] != s[j--]) return false;
 }
 return true;
}