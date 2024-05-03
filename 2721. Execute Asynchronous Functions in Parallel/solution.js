/*
    [Approach]
    1. Define an array variable for store the result of functions.
    2. Define a number variable for count the executed function (promise) of functions.
    3. Looping the functions, in "then" section store the result into "result_list" with the index position.
    4. resolve or reject
      a. when all of the functions been call, resolve the "result_list".
      b. when the error occur during execute "fn", reject with the error message.
*/
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    let result_list = [];
    
    return new Promise((resolve, reject) => {
        //  count the executed each of the functions
        let count = 0;

        functions.map((fn, idx) => {
            fn().then(result => {
                //  save the result into "result_list" with the index position
                result_list[idx] = result;
                count++;

                //  when all of the functions been call, resolve the "result_list"
                if(count === functions.length)
                    resolve(result_list);
            })
            .catch(error => {
                //  when the error occur during execute "fn", reject with the error message
                reject(error);
            });
        });
    });
};
