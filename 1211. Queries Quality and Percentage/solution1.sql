/*
    Time Complexity: 
        2563 ~ 3572 ms  (24.31% ~ 98.75%) 
    
    https://leetcode.com/problems/queries-quality-and-percentage/submissions/986384671/
        Runtime 2563 ms, Beats 98.75%; 
    https://leetcode.com/problems/queries-quality-and-percentage/submissions/986422337/
        Runtime 2731 ms, Beats 87.30%; 
    https://leetcode.com/problems/queries-quality-and-percentage/submissions/986422606/
        Runtime 3572 ms, Beats 24.31%; 

*/
/* Write your T-SQL query statement below */
select 
    [query_name], 
    round(
        avg(cast([rating] as numeric) / [position])
    , 2) as [quality], 
    round(
        avg(case when rating < 3 then 1.00 else 0.00 end) * 100
    , 2) as [poor_query_percentage] 
from Queries
group by [query_name]