/*
  https://leetcode.com/problems/product-sales-analysis-v/submissions/1756545178/
    Runtime 663 ms Beats 92.86% 
*/
/* Write your T-SQL query statement below */
select
  s.[user_id], 
  sum(s.[quantity] * p.[price]) as [spending]
from Sales s 
inner join Product p on p.[product_id] = s.[product_id]
group by s.[user_id]
order by [spending] desc, [user_id]