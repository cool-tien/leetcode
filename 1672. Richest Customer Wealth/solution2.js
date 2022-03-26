/*
    https://leetcode.com/submissions/detail/667394462/
    Runtime: 64 ms, faster than 84.80% of JavaScript online submissions for Richest Customer Wealth.
    Memory Usage: 42.3 MB, less than 45.79% of JavaScript online submissions for Richest Customer Wealth.
*/
//  1. 用 map 將每個 accounts[] 加總 ( customer.reduce((a,b)=>a+b) )
//  2. 用 Math.max() 找出加總後 accounts 陣列，最大值
const maximumWealth = (accounts) => 
    Math.max(...accounts.map(customer=>customer.reduce((a,b)=>a+b)));