/*
    2197 ~ 2680 ms  (67.91% ~ 83.58%)
    
    https://leetcode.com/problems/monthly-transactions-i/submissions/1217834300/
        Runtime 2680 ms Beats 67.91%; 
    https://leetcode.com/problems/monthly-transactions-i/submissions/1217838312/
        Runtime 2241 ms Beats 82.50%; 
    https://leetcode.com/problems/monthly-transactions-i/submissions/1217838563/
        Runtime 2197 ms Beats 83.58%; 
    
*/
/* Write your T-SQL query statement below */

with
Monthly_Transactions as (
    select 
        left([trans_date], 7) as [month], [country], [state], 
        
        count([trans_date]) as [trans_count], 
        sum([amount]) as [total_amount]
    from Transactions 
    group by left([trans_date], 7), [country], [state]
)

select
    [month], [country], 
    --  total transaction and approved transaction
    sum([trans_count]) as [trans_count], 
    sum(
        case 
            when [state] = 'approved' then [trans_count]
            else 0
        end
    ) as [approved_count], 
    --  total amount and approved amount
    sum([total_amount]) as [trans_total_amount], 
    sum(
        case 
            when [state] = 'approved' then [total_amount]
            else 0
        end
    ) as [approved_total_amount]
from Monthly_Transactions as month_trans
group by [month], [country]