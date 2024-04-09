/*
    [Use CTE instead of subquery to improve the performance]

    832 ~ 1121 ms   (30.68% ~ 74.83%)
    
    https://leetcode.com/problems/tree-node/submissions/1227299458/
        Runtime  832 ms Beats 74.83% of users with MS SQL Server; 
    https://leetcode.com/problems/tree-node/submissions/1227325953/
        Runtime 1121 ms Beats 30.68% of users with MS SQL Server; 
    https://leetcode.com/problems/tree-node/submissions/1227326302/
        Runtime 1043 ms Beats 40.39% of users with MS SQL Server; 
*/
/* Write your T-SQL query statement below */
/*
    These are three types output: 
    - Root (null)
    - Inner ("id" been refer in "p_id")
    - Leaf ("id" not been refer in "p_id")
*/
with 
Inner_List as (
    --  p_id = Parent Node (refer to "id")
    select distinct 
        p_id
    from Tree
)

select 
    t.id, 
    case 
        when isnull(i.p_id, 0) >= 1 then 'Inner' 
        when t.p_id is null then 'Root' 
        else 'Leaf' 
    end as type
from Tree t
left join Inner_List i on i.p_id = t.id
