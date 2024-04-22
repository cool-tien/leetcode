/**
    Ugly solution (splice let the performance drop down)

    Time Complexity: O(n)
        2443 ~ 2594 ms      (5.02%)
    Space Complexity: O(n)
        57.29 ~ 58.28 MB    (94.20% ~ 99.52%)
    
    https://leetcode.com/problems/compact-object/submissions/1237944086/
        Runtime 2548 ms Beats 5.02% of users with JavaScript; Memory 57.29 MB Beats 99.52% of users with JavaScript; 
    https://leetcode.com/problems/compact-object/submissions/1238902922/
        Runtime 2594 ms Beats 5.02% of users with JavaScript; Memory 58.28 MB Beats 94.20% of users with JavaScript; 
    https://leetcode.com/problems/compact-object/submissions/1238906935/
        Runtime 2443 ms Beats 5.02% of users with JavaScript; Memory 58.27 MB Beats 94.20% of users with JavaScript; 

 * @param {Object|Array } obj
 * @return {Object|Array}
 */
/*
    Based on recursion the solve this problem. 

    1. Check the parameter of "obj" is it array.
    2. Whatever the data type of "obj" is an array or an object, looping the items of "obj".
    3. If the value of items are falsy (null, 0, false) remove it; 
       When the data type of value are array or object, 
       call compactObject to recursion it and 
       assign the item's value with the return value.
*/
var compactObject = function(obj) {
    const is_array = Array.isArray(obj);
    
    //  Array
    if(is_array){
        for(let i=0; i<obj.length; i++){
            //  remove falsy value (null, 0, false)
            if(!obj[i])
                obj.splice(i--, 1);
            //  call recursion and assign the return value
            else if(typeof(obj[i]) === 'object')
                obj[i] = compactObject(obj[i]);
        }
    }
    //  JavaScript Object
    else{
        for(const prop in obj){
            //  remove falsy value (null, 0, false)
            if(!obj[prop])
                delete obj[prop];
            //  call recursion and assign the return value
            else if(typeof(obj[prop]) === 'object')
                obj[prop] = compactObject(obj[prop]);
        }
    }
    
    return obj;
};