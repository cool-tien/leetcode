/*
  https://leetcode.com/problems/find-loyal-customers/submissions/1750849200/

  Runtime 556 ms Beats 15.69%
*/
/* Write your T-SQL query statement below */
with
CTE as (
  select
    [customer_id], 
    count([transaction_id]) as [total_transactions], 
    datediff(day, min([transaction_date]), max([transaction_date])) as [active_days], 
    sum(case when [transaction_type] = 'refund' then 1.0 else 0.0 end) / 
    count([transaction_id]) as [refund_rate]
  from customer_transactions 
  group by [customer_id]
)

select 
  [customer_id]
from CTE
where 
  [total_transactions] >= 3 and 
  [active_days] >= 30 and 
  [refund_rate] < 0.2