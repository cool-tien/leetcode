/*
  https://leetcode.com/problems/find-stores-with-inventory-imbalance/submissions/1753026159/
    Runtime 389 ms Beats 97.07% 
  
  #Approach
  1. Get expensive, cheapest rank and different product from inventory.
  2. Join the those CTE table with condition.
  3. Filter by cheapest quantity must more than expensive quantity.
*/
-- 1. Get expensive, cheapest rank and different product from inventory.
with
ExpensiveRank as (
  select
    [store_id], [product_name], [quantity], [price], 
    rank() over(partition by [store_id] order by price desc) as [rank], 
    count([store_id]) over(partition by [store_id]) as [diff_products]
  from inventory 
), 
CheapestRank as (
  select
    [store_id], [product_name], [quantity], [price], 
    rank() over(partition by [store_id] order by price) as [rank], 
    count([store_id]) over(partition by [store_id]) as [diff_products]
  from inventory 
)

select 
  s.*, e.[product_name] as [most_exp_product], 
  c.[product_name] as [cheapest_product], 
  round(cast(c.[quantity] as float) / e.[quantity], 2) as [imbalance_ratio]
from stores s 
-- 2. Join the those CTE table with condition. 
inner join ExpensiveRank e on 
  e.[store_id] = s.[store_id] and 
  e.[rank] = 1 and 
  e.[diff_products] >= 3
inner join CheapestRank c on 
  c.[store_id] = s.[store_id] and 
  c.[rank] = 1 and 
  c.[diff_products] >= 3
--  3. Filter by cheapest quantity must more than expensive quantity. 
where e.[quantity] < c.[quantity]
order by 6 desc, s.[store_name]