/*
    874 ms ~ 1790 ms   (10.75% ~ 80.00%)
    
    https://leetcode.com/problems/confirmation-rate/submissions/1144735635/
        Runtime  874 ms Beats 80.00%; 
    https://leetcode.com/problems/confirmation-rate/submissions/1144888512/
        Runtime 1790 ms Beats 10.75%; 
    https://leetcode.com/problems/confirmation-rate/submissions/1144890285/
        Runtime 1296 ms Beats 26.89%; 

*/
/* Write your T-SQL query statement below */

with
--  Total request of the user 
Request as (
    select 
        [user_id], count([user_id]) as [total_request]
    from Confirmations
    group by [user_id]
), 
--  Total confirm of the user
Confirm as (
    select 
        [user_id], count([user_id]) as [total_confirm]
    from Confirmations
    where [action] = 'confirmed'
    group by [user_id]
)

select 
    Signups.[user_id], 
    case 
        when Confirm.[user_id] is null then 0
        else round(cast(Confirm.[total_confirm] as float) / cast(Request.[total_request] as float), 2)
    end as [confirmation_rate]
from Signups 
left join Request on Request.[user_id] = Signups.[user_id]
left join Confirm on Confirm.[user_id] = Signups.[user_id]