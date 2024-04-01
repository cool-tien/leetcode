/*
    2298 ~ 3039 ms  (37.24% ~ 85.88%)
    
    [refer and learning from GPT "slide window function"]

    https://leetcode.com/problems/last-person-to-fit-in-the-bus/submissions/1219745253/
        Runtime 2298 ms Beats 85.88% of users with MS SQL Server; 
    https://leetcode.com/problems/last-person-to-fit-in-the-bus/submissions/1219745830/
        Runtime 2482 ms Beats 72.12% of users with MS SQL Server; 
    https://leetcode.com/problems/last-person-to-fit-in-the-bus/submissions/1219746086/
        Runtime 3039 ms Beats 37.24% of users with MS SQL Server; 
*/
/* Write your T-SQL query statement below */
with 
Turn_Weight as ( 
    select 
        person_name, 
        --  slide window function, default using 
        --  "UNBOUNDED PRECEDING"  start from first line 
        sum(weight) over (order by turn) as total_weight 
    from Queue 
)

select top 1
    person_name
from Turn_Weight
where total_weight <= 1000
order by total_weight desc