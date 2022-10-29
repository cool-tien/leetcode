/*
    1698~2131 ms (22.81%~59.39%)

    https://leetcode.com/submissions/detail/829618129/
        Runtime: 1698 ms, faster than 59.39% of MS SQL Server online submissions for Group Sold Products By The Date.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Group Sold Products By The Date.
    https://leetcode.com/submissions/detail/829621023/
        Runtime: 2131 ms, faster than 22.81% of MS SQL Server online submissions for Group Sold Products By The Date.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Group Sold Products By The Date.
    https://leetcode.com/submissions/detail/829621421/
        Runtime: 2050 ms, faster than 26.39% of MS SQL Server online submissions for Group Sold Products By The Date.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Group Sold Products By The Date.

*/
/* Write your T-SQL query statement below */

with 
daily_list as (
    select  
        [sell_date], [product] 
    from Activities 
    group by [sell_date], [product] 
)

select
    [sell_date], count([product]) as [num_sold], 
    replace(substring(
    (
        select ',' + sub.[product] as 'data()'
        from daily_list as sub 
        where main.[sell_date] = sub.[sell_date] 
        for xml path('') 
    ), 2, 9999), ' ', '') as [products]
from daily_list main
group by [sell_date]
