/*
  https://leetcode.com/problems/market-analysis-iii/submissions/1625054104/
*/
with
SoldList as (
  select 
    Users.[seller_id], 
    count(distinct Orders.[item_id]) as [num_items] 
  from Users 
  inner join Items on Items.[item_brand] != Users.[favorite_brand] 
  inner join Orders on 
    Orders.[item_id] = Items.[item_id] and 
    Orders.[seller_id] = Users.[seller_id] 
  group by Users.[seller_id], Orders.[item_id] 
), 
TopSell as (
  select 
    [seller_id], sum([num_items]) as [num_items] 
  from SoldList 
  group by [seller_id] 
)

select * from TopSell 
where [num_items] = (select max([num_items]) from TopSell) 