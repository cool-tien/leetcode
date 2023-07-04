/*
    Time Complexity: 
        4828 ~ 5760 ms  (8.27% ~ 79.22%)
    
    https://leetcode.com/problems/percentage-of-users-attended-a-contest/submissions/985141241/
        Runtime 5397 ms, Beats 32.61%; 
    https://leetcode.com/problems/percentage-of-users-attended-a-contest/submissions/985762550/
        Runtime 5760 ms, Beats  8.27%; 
    https://leetcode.com/problems/percentage-of-users-attended-a-contest/submissions/985762711/
        Runtime 4828 ms, Beats 79.22%; 

*/
/* Write your T-SQL query statement below */
declare @total float = (select count([user_id]) from Users)

select 
    [contest_id], 
    round(count([contest_id]) / @total * 100, 2) as [percentage]
from Register 
group by [contest_id]
order by [percentage] desc, [contest_id]