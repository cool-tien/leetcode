/*
  https://leetcode.com/problems/the-number-of-rich-customers/submissions/1772180859/
    Runtime 420 ms Beats 85.00% 
*/
/* Write your T-SQL query statement below */
select 
  count(distinct [customer_id]) as [rich_count]
from Store 
where [amount] > 500 