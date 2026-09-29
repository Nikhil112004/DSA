/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0;
    let maxL = [];
    maxL[0] = height[0]
    for(let i = 1; i < height.length; i++){
        maxL[i] = Math.max(maxL[i - 1], height[i]);
    }
    let maxR = [];
    maxR[height.length - 1] = height[height.length - 1];
    for(let i = height.length-2; i >= 0; i-- ){
        maxR[i] = Math.max(maxR[i + 1], height[i])
    };

    for(let i = 0; i < height.length; i++){
        let waterTrapped = Math.min(maxL[i], maxR[i]) - height[i];
        ans = ans +  (waterTrapped < 0 ? 0 : waterTrapped);
    }
    return ans;
};