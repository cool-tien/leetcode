/*
	https://leetcode.com/submissions/detail/683309056/
	Runtime: 1321 ms, faster than 92.98% of MS SQL Server online submissions for Capital Gain/Loss.
	Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Capital Gain/Loss.
*/
/* Write your T-SQL query statement below */

with
gain_loss as (
    select
        [stock_name], [operation], 
        case 
            when [operation] = 'Buy' then
                sum(-[price])
            else
                sum([price])
        end as [total]
    from Stocks
    group by [stock_name], [operation]
)
select
    [stock_name], sum([total]) as [capital_gain_loss]
from gain_loss
group by [stock_name]
