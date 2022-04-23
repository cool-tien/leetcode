/*
    https://leetcode.com/submissions/detail/685893660/
    Runtime: 2060 ms, faster than 42.47% of MS SQL Server online submissions for Reformat Department Table.
    Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Reformat Department Table.
*/
/* Write your T-SQL query statement below */

select
    main.[id], 
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'Jan'
    ) as [Jan_Revenue], 
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'Feb'
    ) as [Feb_Revenue], 
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'Mar'
    ) as [Mar_Revenue], 
    
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'Apr'
    ) as [Apr_Revenue], 
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'May'
    ) as [May_Revenue],
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'Jun'
    ) as [Jun_Revenue], 
    
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'Jul'
    ) as [Jul_Revenue], 
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'Aug'
    ) as [Aug_Revenue],
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'Sep'
    ) as [Sep_Revenue], 
    
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'Oct'
    ) as [Oct_Revenue], 
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'Nov'
    ) as [Nov_Revenue],
    (
        select sum([revenue]) from Department 
        where [id] = main.[id] and [month] = 'Dec'
    ) as [Dec_Revenue]
from Department as main
group by main.[id]
