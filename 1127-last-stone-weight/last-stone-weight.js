/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let pq = new MaxPriorityQueue();
    for(let i = 0; i < stones.length; i++){
        pq.enqueue(stones[i]);
    }
    while(pq.size() > 1){
        x = pq.dequeue();
        y = pq.dequeue();
        if(x-y > 0){
            pq.enqueue(x-y);
        }
    }
    return pq.dequeue() || 0;
};