/*
  https://leetcode.com/problems/calculate-compressed-mean/submissions/1756528825/
    Runtime 368 ms Beats 64.71% 
*/
/* Write your T-SQL query statement below */
select
  round(
    sum([item_count] * [order_occurrences] * 1.0) / sum([order_occurrences])
  , 2) as [average_items_per_order]
from Orders