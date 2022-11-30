/*
    706 ~ 805 ms    (63.14% ~ 92.80%)

    https://leetcode.com/submissions/detail/852040571/
        Runtime: 706 ms, faster than 92.80% of MS SQL Server online submissions for Duplicate Emails.
    https://leetcode.com/submissions/detail/852041204/
        Runtime: 761 ms, faster than 78.18% of MS SQL Server online submissions for Duplicate Emails.
    https://leetcode.com/submissions/detail/852041354/
        Runtime: 805 ms, faster than 63.14% of MS SQL Server online submissions for Duplicate Emails.
*/
/* Write your T-SQL query statement below */
with 
Duplicate as (
    select
        [email], count([email]) as [appear]
    from Person
    group by [email]    
)
select 
    [Email]
from Duplicate
where [appear] >= 2