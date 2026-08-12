/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let per = (path) => {
        if(path.length === nums.length) {
            result.push([...path])
        }
        for(let i = 0; i < nums.length; i++){
            if(!path.includes(nums[i])){
                path.push(nums[i]);
                per(path);
                path.pop();
            }
        }
    }
    per([]);
    return result;
};