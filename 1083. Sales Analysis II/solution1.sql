/*
  https://leetcode.com/problems/sales-analysis-ii/submissions/1750815973/
    Runtime 2214 ms Beats 89.47%
*/
/* Write your T-SQL query statement below */
with
S8List as (
  select s.[buyer_id] from Sales s
  inner join Product p on p.[product_id] = s.[product_id]
  where p.[product_name] = 'S8'
),
iPhoneList as (
  select s.[buyer_id] from Sales s
  inner join Product p on p.[product_id] = s.[product_id]
  where p.[product_name] = 'iPhone'
)

select distinct
  s.[buyer_id] 
from S8List s
where s.[buyer_id] not in (
  select [buyer_id] from iPhoneList
)