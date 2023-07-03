/*
    Time Complexity:
        1351 ~ 1679 ms  (35.65% ~ 79.67%)

    https://leetcode.com/problems/capital-gainloss/submissions/982899421/
        Runtime 1351 ms, Beats 79.67%; 
    https://leetcode.com/problems/capital-gainloss/submissions/982904243/
        Runtime 1351 ms, Beats 79.67%; 
    https://leetcode.com/problems/capital-gainloss/submissions/982904424/
        Runtime 1679 ms, Beats 35.65%; 
*/
/* Write your T-SQL query statement below */
select 
    [stock_name], 
    sum(
        case 
            when [operation] = 'Buy' then -[price]
            else [price]
        end
    ) as [capital_gain_loss]
from Stocks
group by [stock_name]