/**
    https://leetcode.com/submissions/detail/735533466/
    Runtime: 74 ms, faster than 97.90% of JavaScript online submissions for Maximum Units on a Truck.
    Memory Usage: 44.6 MB, less than 63.47% of JavaScript online submissions for Maximum Units on a Truck.

 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    let total = 0;
    boxTypes = boxTypes.sort((arr1,arr2)=>arr2[1]-arr1[1]);
    
    while(truckSize && boxTypes.length){
        let [box, unit] = boxTypes.shift();
        
        if(truckSize > box){
            total += (box * unit);
            truckSize -= box;
        }
        else{
            total += (truckSize * unit);
            truckSize = 0;
        }
    }
    
    return total;
};