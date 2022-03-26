/*
    https://leetcode.com/submissions/detail/667415231/
    Runtime: 59 ms, faster than 92.91% of JavaScript online submissions for Richest Customer Wealth.
    Memory Usage: 43.2 MB, less than 7.57% of JavaScript online submissions for Richest Customer Wealth.
*/
const maximumWealth = (accounts) => {
    //  最富有財富金額
let max = 0;

    //  1. 迴圈走訪每個客戶
for(let account of accounts){
            //  當前客戶財富
    let total = 0;
    
            //  2. 加總所有銀行金額
    for(let num of account)
        total += num;
    //  3. 總金額對比最大值
    if(total > max)
        max = total;
}

return max;
}