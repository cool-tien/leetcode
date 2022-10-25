/*

    https://leetcode.com/submissions/detail/828236941/
        Runtime: 687 ms, faster than 95.75% of MS SQL Server online submissions for Rising Temperature.
    https://leetcode.com/submissions/detail/828355637/
        Runtime: 1638 ms, faster than 12.22% of MS SQL Server online submissions for Rising Temperature.
    https://leetcode.com/submissions/detail/828356630/
        Runtime: 1007 ms, faster than 52.60% of MS SQL Server online submissions for Rising Temperature.
    
*/
/* Write your T-SQL query statement below */

select 
    main.[id] 
from Weather main
where main.[temperature] > (
    select 
        sub.[temperature] 
    from Weather sub
    where sub.[recordDate] = dateadd(day, -1, main.[recordDate])
)
