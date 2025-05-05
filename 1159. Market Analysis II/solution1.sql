/*
  https://leetcode.com/problems/market-analysis-ii/submissions/1625145223/
*/
with 
RankList as ( 
  select 
    [item_id], [seller_id], 
    rank() over(partition by [seller_id] order by [order_date]) as [rank] 
  from Orders 
), 
CTE as (
  --  The users never sold item 
  select 
    u.[user_id] as [seller_id], 'no' as [2nd_item_fav_brand] 
  from Users u 
  where u.[user_id] not in (
    select distinct [seller_id] from Orders 
  )
  union all 
  --  The users don't have sold second item (only sold one item)
  select 
    [seller_id], 'no' as [2nd_item_fav_brand]
  from RankList 
  group by [seller_id] 
  having count([seller_id]) = 1 
  union all 
  --  
  select 
    list.[seller_id], 
    case
      when u.[favorite_brand] = item.[item_brand] then 'yes'
      else 'no'
    end as [2nd_item_fav_brand]
  from RankList list 
  inner join Users u on u.[user_id] = list.[seller_id] 
  inner join Items item on item.[item_id] = list.[item_id] 
  where list.[rank] = 2 
)

select * from CTE 