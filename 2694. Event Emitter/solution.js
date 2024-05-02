/*
    using below structure to manage subscribe list: 

    {
        "eventName1": [], 
        "eventName2": [fn1], 
        "eventName3": [fn1, empty, fn3], 
    }

    1. initialize a Object for tracking 
    2. subscribe the eventName and return a function include "unsubscribe" current event
      a. if the eventName exist push the callback into that event array
      b. not exist will assign the callback within array
    3. emit - get result of callback with the eventName is still subscribing

*/
class EventEmitter {
    constructor(){
        //  initialize a subscribe list for tracking
        this.subscribe_list = {};
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        //  if this "eventName" already exist, push the callback function to tail
        (this.subscribe_list[eventName])?
            this.subscribe_list[eventName].push(callback): 
            this.subscribe_list[eventName] = [callback];
        
        const index = this.subscribe_list[eventName].length - 1;
        return {
            unsubscribe: () => {
                //  when been call, it will remove the callback function in index of subscribe_list[eventName]
                delete this.subscribe_list[eventName][index];
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        //  if the "eventName" exist, execute the subscribed callback function list
        if(!this.subscribe_list[eventName]) return [];

        let events = this.subscribe_list[eventName];
        let result = [];
        
        for(const callback of events){
            //  the callback is not empty
            if(callback)
                result.push(callback(...args));
        }
        
        return result;
    }
}