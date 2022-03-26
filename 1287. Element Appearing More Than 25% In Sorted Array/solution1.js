/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let obj = {}
    
    for(let ele of arr){
        if(obj[ele])
            obj[ele]++;
        else
            obj[ele] = 1;
        
        if(obj[ele]>arr.length/4)
            return ele;
    }
};