/**
    O(nm)
    110~148 ms (50.50%~84.56%)
    46.4~47.5 MB (90.10%~98.81%)

 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let min = Infinity;
    let output = [];
    
    if(list1.length > list2.length)
        [list1, list2] = [list2, list1];
    
    for(let i=0; i<list1.length; i++){
        let idx = list2.indexOf(list1[i]);
        let sum_idx = i + idx;
        
        if(idx !== -1 && min >= sum_idx){
            //  reset output array
            if(min !== sum_idx)
                output = [];
            
            min = sum_idx;
            output.push(list1[i]);
        }
    }
    
    return output;
};