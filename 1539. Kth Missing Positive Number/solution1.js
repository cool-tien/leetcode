/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let miss = [];
    
    let i = 1;
    while(miss.length!=k){
        if(arr.indexOf(i)==-1)
            miss.push(i);
        i++;
    }
    
    return miss[k-1];
};