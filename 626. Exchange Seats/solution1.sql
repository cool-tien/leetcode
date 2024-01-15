/*
    696 ~ 991 ms    (22.59% ~ 56.44%)

    https://leetcode.com/problems/exchange-seats/submissions/1146520739/
        Runtime 991 ms Beats 22.59%; 
    https://leetcode.com/problems/exchange-seats/submissions/1146522817/
        Runtime 861 ms Beats 33.18%; 
    https://leetcode.com/problems/exchange-seats/submissions/1146523086/
        Runtime 696 ms Beats 56.44%; 
*/
/* Write your T-SQL query statement below */
select
    case 
        when id = (select max([id]) from Seat) and (id % 2) = 1 then [id]
        when (id % 2) = 1 then [id] + 1
        else [id] - 1
    end as [id], 
    [student]
from Seat
order by [id]