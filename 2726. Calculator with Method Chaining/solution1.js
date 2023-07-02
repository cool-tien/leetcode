/*
    Time Complexity: O(1)
        57~ 67 ms       ( 9.16% ~ 60.99%)
    Space Complexity: O(1)
        41.8 ~ 42.2 MB  (16.68% ~ 58.51%)
    
    https://leetcode.com/problems/calculator-with-method-chaining/submissions/984251770/
        Runtime 57 ms, Beats 60.99%; Memory 41.8 MB, Beats 58.51%; 
    https://leetcode.com/problems/calculator-with-method-chaining/submissions/984327762/
        Runtime 61 ms, Beats 37.25%; Memory 41.8 MB, Beats 58.51%; 
    https://leetcode.com/problems/calculator-with-method-chaining/submissions/984328098/
        Runtime 67 ms, Beats  9.16%; Memory 42.2 MB, Beats 16.68%;
*/
class Calculator {
  
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.total = value;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.total += value;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.total -= value;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.total *= value;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value === 0)
          throw "Division by zero is not allowed";
        else
          this.total /= value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.total **= value;
    }
      
    /** 
     * @return {number}
     */
    getResult() {
        return this.total;
    }
  }