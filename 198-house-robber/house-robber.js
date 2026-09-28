/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    if(n === 1) return nums[0]
    let a = nums[0];
    let b = Math.max(nums[0], nums[1]);
    for(let i = 2; i < n; i++) {
        let ans = Math.max(a + nums[i], b);
        a = b;
        b = ans;
    }
    return b;
};