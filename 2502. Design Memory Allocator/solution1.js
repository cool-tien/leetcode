/**
    O(n)

    https://leetcode.com/contest/weekly-contest-323/problems/design-memory-allocator/
    https://leetcode.com/problems/design-memory-allocator/

 * @param {number} n
 */
var Allocator = function(n) {
    this.arr = new Array(n).fill(0);
    this.empty = n;
};

/** 
 * @param {number} size 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function(size, mID) {
    const indexOfFree = (size) => {
        let end = this.arr.length - size;
        
        for(let i=0; i<=end; i++){
            if(this.arr[i] !== 0)
                continue;
            
            //  build the range of array become Set to check is it only 0 value (empty)
            let set = new Set(this.arr.slice(i, i + size))
            
            if(set.has(0) && set.size === 1)
                return i;
        }
        
        return -1;
    }
    
    //  already know not space
    if(size > this.empty)
        return -1;
    
    let idx_free = indexOfFree(size);
    
    //  allocate free space = mID
    if(idx_free !== -1){
        let end = idx_free + size;
        
        for(let i=idx_free; i<end; i++)
            this.arr[i] = mID;
        
        this.empty -= size;
    }
    
    return idx_free;
};

/** 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.free = function(mID) {
    let free_size = 0;
    
    for(let i=0; i<this.arr.length; i++)
        if(this.arr[i] === mID){
            this.arr[i] = 0;
            free_size++;
        }
    
    this.empty += free_size;
    return free_size;
};

/** 
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 */