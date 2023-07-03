/*
    Time Complexity: 
        716 ~ 1694 ms   (5.40% ~ 24.71%)
    
    https://leetcode.com/problems/trips-and-users/submissions/982943533/
        Runtime  716 ms, Beats 24.71%;
    https://leetcode.com/problems/trips-and-users/submissions/982946185/
        Runtime 1694 ms, Beats 5.4%;
    https://leetcode.com/problems/trips-and-users/submissions/982946453/
        Runtime  833 ms, Beats 15.12%;
*/
/* Write your T-SQL query statement below */

with 
Unbanned as (
    select * from Users
    where [banned] = 'No'
), 
Trip_Days as (
    select distinct 
        t.[request_at] 
    from [Trips] t
    inner join [Unbanned] uc on uc.[users_id] = t.[client_id]
    inner join [Unbanned] ud on ud.[users_id] = t.[driver_id]
    where 
        [request_at] >= '2013-10-01' and 
        [request_at] <= '2013-10-03' and 
        (uc.[banned] = 'No' and ud.[banned] = 'No')
), 
Completion as (
    select 
        [request_at], 
        cast(count([request_at]) as float) as [count]
    from [Trips] t
    --  Unbanned Driver and Client
    inner join [Unbanned] uc on uc.[users_id] = t.[client_id]
    inner join [Unbanned] ud on ud.[users_id] = t.[driver_id]
    where 
        t.[status] = 'completed' 
    group by [request_at]
), 
Cancellation as (
    select 
        [request_at], 
        cast(count([request_at]) as float) as [count]
    from [Trips] t
    --  Unbanned Driver and Client
    inner join [Unbanned] uc on uc.[users_id] = t.[client_id]
    inner join [Unbanned] ud on ud.[users_id] = t.[driver_id]
    where 
        t.[status] != 'completed' 
    group by [request_at]
)

select
    Trip_Days.[request_at] as [Day], 
    case
        when (isnull(Cancellation.[count], 0)) = 0 then
            0.00
        else
            round(Cancellation.[count] / (isnull(Completion.[count], 0.00) + isnull(Cancellation.[count], 0.00)), 2)
    end as [Cancellation Rate]
from [Trip_Days]
left join [Completion] on Completion.[request_at] = Trip_Days.[request_at]
left join [Cancellation] on Cancellation.[request_at] = Trip_Days.[request_at]
