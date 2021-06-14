/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b)=>b[1]-a[1]);
    let res = 0;
    
    for(let box of boxTypes){
        if(truckSize-box[0]<0){
            res += truckSize*box[1];
            break;
        }
        
        truckSize -= box[0];
        res += box[0]*box[1];
        
    }
    
    return res;
};