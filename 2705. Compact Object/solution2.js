/**
    Time Complexity: O(n)
        80 ~ 89 ms       (42.05% ~ 74.31%)
    Space Complexity: O(n)
        58.25 ~ 58.73 MB (87.15% ~ 94.20%)

    https://leetcode.com/problems/compact-object/submissions/1238912685/
        Runtime 85 ms Beats 56.22% of users with JavaScript; Memory 58.73 MB Beats 87.15% of users with JavaScript; 
    https://leetcode.com/problems/compact-object/submissions/1238916396/
        Runtime 80 ms Beats 74.31% of users with JavaScript; Memory 58.25 MB Beats 94.20% of users with JavaScript; 
    https://leetcode.com/problems/compact-object/submissions/1238916622/
        Runtime 89 ms Beats 42.05% of users with JavaScript; Memory 58.36 MB Beats 93.28% of users with JavaScript; 

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
        return obj.filter(Boolean).map(item => 
            (typeof(item) === 'object')? 
                compactObject(item): 
                item
        );
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