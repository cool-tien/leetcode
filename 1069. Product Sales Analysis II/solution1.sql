/*
  https://leetcode.com/problems/product-sales-analysis-ii/submissions/1756546429/
    Runtime 2764 ms Beats 73.91% 
*/
/* Write your T-SQL query statement below */
select 
  [product_id], sum([quantity]) as [total_quantity]
from Sales 
group by [product_id]