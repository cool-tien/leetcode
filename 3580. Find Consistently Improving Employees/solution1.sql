/*
  https://leetcode.com/problems/find-consistently-improving-employees/submissions/1755351914/
    Runtime 392 ms Beats 63.32%
*/
/* Write your T-SQL query statement below */
with 
RankList as (
  select 
    [employee_id], [rating], 
    rank() over(partition by [employee_id] order by [review_date] desc) as [rank], 
    count([employee_id]) over(partition by [employee_id]) as [total_review]
  from performance_reviews 
)

select
  r1.[employee_id], e.[name], 
  (r1.[rating] - r3.[rating]) as [improvement_score] 
from RankList r1
inner join RankList r2 on 
  r2.[employee_id] = r1.[employee_id] and r2.[rank] = 2
inner join RankList r3 on 
  r3.[employee_id] = r1.[employee_id] and r3.[rank] = 3
inner join employees e on 
  r1.[employee_id] = e.[employee_id]
where 
  r1.[rank] = 1 and r1.[total_review] >= 3 and 
  r1.[rating] > r2.[rating] and r2.[rating] > r3.[rating]
order by 3 desc, e.[name]