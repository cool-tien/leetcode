/*
https://leetcode.com/problems/seasonal-sales-analysis/submissions/1749662962/
- Time complexity:O(n log n)
Runtime 377 ms Beats 76.54%

# Approach
1. Identify the season of sales table.
2. Group by season and category to list out the ranking.
3. Select the first rank on each season.
*/

/* Write your T-SQL query statement below */
--  Identify the season of sales table.
with 
CTE as (
  select
    s.*, 
    p.[category], 
    case 
      when month(s.[sale_date]) in (3, 4, 5) then 'Spring'
      when month(s.[sale_date]) in (6, 7, 8) then 'Summer'
      when month(s.[sale_date]) in (9, 10, 11) then 'Fall'
      else 'Winter'
    end as [season]
  from sales s 
  inner join products p on p.[product_id] = s.[product_id]
),
--  Group by season and category to list out the ranking.
SeasonRank as (
  select
    [season], [category], 
    sum([quantity]) as [total_quantity], 
    sum([quantity] * [price]) as [total_revenue], 
    rank() over(
      partition by [season] 
      order by sum([quantity]) desc, sum([quantity] * [price]) desc 
    ) as [rank]
  from CTE 
  group by [season], [category]
)

--  Select the first rank on each season.
select
  [season], [category], [total_quantity], [total_revenue]
from SeasonRank
where [rank] = 1
order by [season]
```