/*
  https://leetcode.com/problems/sales-analysis-i/submissions/1750808005/
    Runtime 2310 ms Beats 75.00%
*/
/* Write your T-SQL query statement below */
with 
TopList as (
  select 
    [seller_id], sum([price]) as [total_price], 
    rank() over(order by sum([price]) desc) as [rank]
  from Sales 
  group by [seller_id]
)

select [seller_id] from TopList
where [rank] = 1 