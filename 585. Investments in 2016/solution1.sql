/*
    1253 ~ 2096 ms  (8.99% ~ 63.98%)
    
    https://leetcode.com/problems/investments-in-2016/submissions/1220811400/
        Runtime 2096 ms Beats 8.99% of users with MS SQL Server; 
    https://leetcode.com/problems/investments-in-2016/submissions/1220927005/
        Runtime 1253 ms Beats 63.98% of users with MS SQL Server; 
    https://leetcode.com/problems/investments-in-2016/submissions/1220930534/
        Runtime 1399 ms Beats 47.48% of users with MS SQL Server; 
*/
/* Write your T-SQL query statement below */

with 
Tiv_2015_People as (
    select
        tiv_2015, count(tiv_2015) as count
    from Insurance
    group by tiv_2015
), 
LatLon as (
    select
        (cast(lat as varchar) + '_' + cast(lon as varchar)) as position, 
        count(cast(lat as varchar) + '_' + cast(lon as varchar)) as count
    from Insurance
    group by (cast(lat as varchar) + '_' + cast(lon as varchar))
)

select 
    round(sum(i.tiv_2016), 2) as [tiv_2016]
from Insurance i
inner join Tiv_2015_People t on 
    t.tiv_2015 = i.tiv_2015 and 
    t.count >= 2 
inner join LatLon l on 
    l.count = 1 and 
    (cast(i.lat as varchar) + '_' + cast(i.lon as varchar)) = l.position 