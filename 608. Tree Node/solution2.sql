/*
    926 ~ 1323 ms   (13.68% ~ 61.58%)
    
    [Not Optimize, used subquery]
    https://leetcode.com/problems/tree-node/submissions/1227333857/
        Runtime 1214 ms Beats 20.74% of users with MS SQL Server; 
    https://leetcode.com/problems/tree-node/submissions/1227334365/
        Runtime  926 ms Beats 61.58% of users with MS SQL Server; 
    https://leetcode.com/problems/tree-node/submissions/1227334502/
        Runtime 1323 ms Beats 13.68% of users with MS SQL Server; 
*/
/* Write your T-SQL query statement below */
/*
    These are three types output: 
    - Root (null)
    - Inner ("id" been refer in "p_id")
    - Leaf ("id" not been refer in "p_id")
*/

select 
    t.id, 
    case
        when t.p_id is null then 'Root'
        when (
            select count(distinct inner_list.p_id) from Tree inner_list
            where inner_list.p_id = t.id
        ) = 1 then 'Inner'
        else 'Leaf'
    end as type
from Tree t
