/*
    439 ~ 553 ms    (26.71% ~ 53.15%)
    
    [refer how to define a triangle]
    https://leetcode.com/problems/triangle-judgement/submissions/1219647485/
        Runtime 553 ms Beats 26.71% of users with PostgreSQL; 
    https://leetcode.com/problems/triangle-judgement/submissions/1219666664/
        Runtime 439 ms Beats 53.15% of users with PostgreSQL; 
    https://leetcode.com/problems/triangle-judgement/submissions/1219674127/
        Runtime 465 ms Beats 44.81% of users with PostgreSQL; 
*/
/* Write your T-SQL query statement below */
--  A triangle define: 
--  The sum of any two sides must be greater than the remaining side 

select 
    x, y, z, 
    case 
        --  using "or" condition, if one side not match triangle define, set it to 'No'
        when x >= (y + z) or y >= (x + z) or z >= (x + y) then 'No' 
        else 'Yes' 
    end as triangle 
from Triangle 