/*
    Time Complexity: O(1) | O(n)
        7022 ~ 7044 ms  (5.40%)
    Space Complexity: O(n)
        88.2 ~ 89.5 MB  (5.40% ~ 8.11%)
    
    https://leetcode.com/problems/maximum-frequency-stack/submissions/988740057/
        Runtime 7044 ms, Beats 5.40%; Memory 88.2 MB, Beats 8.11%; 
    https://leetcode.com/problems/maximum-frequency-stack/submissions/989033153/
        Runtime 7022 ms, Beats 5.40%; Memory 88.2 MB, Beats 8.11%; 
    https://leetcode.com/problems/maximum-frequency-stack/submissions/989033580/
        Runtime 7034 ms, Beats 5.40%; Memory 89.5 MB, Beats 5.40%; 

*/
var FreqStack = function() {
    this.stack = [];
    this.map = new Map();
    this.freq = {
        key: null, 
        appear: 0, 
    };
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    const appear = (this.map.get(val) || 0) + 1;
    
    this.stack.push(val);
    this.map.set(val, appear);
    
    //  if "val" appear more than current, then change "this.freq"
    if(appear >= this.freq.appear)
        this.freq = {
            key: val,
            appear
        }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const { key } = this.freq;
    //  after remove, appear time
    const new_appear = this.map.get(key) - 1;

    //  if still got appear time, update the "map"
    if(new_appear)
        this.map.set(key, new_appear);
    //  "new_appear" = 0, just delete
    else
        this.map.delete(key);
    
    //  remove the key
    const idx = this.stack.lastIndexOf(key);
    this.stack.splice(idx, 1);

    //  found the new freq
    this.freq = {
        key: null, 
        appear: 0, 
    };
    
    for(const num of this.stack){
        const appear = this.map.get(num);

        if(appear >= this.freq.appear)
            this.freq = {
                key: num, 
                appear
            }
    }
    
    return key;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */