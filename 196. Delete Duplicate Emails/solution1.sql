/*
    886 ~ 1431 ms   (18.98% ~ 85.25%)
    
    https://leetcode.com/problems/delete-duplicate-emails/submissions/1218030608/
        Runtime 886 ms Beats 85.25%; 
    https://leetcode.com/problems/delete-duplicate-emails/submissions/1218049304/
        Runtime 1431 ms Beats 18.98%; 
    https://leetcode.com/problems/delete-duplicate-emails/submissions/1218049611/
        Runtime 996 ms Beats 70.92%; 
        
*/
/* Write your T-SQL query statement below */

with 
Duplicate as(
    select 
        min([id]) as [id], [email]
    from Person
    group by [email]
    having count([email]) >= 2
)

delete p from Person p
inner join Duplicate d on d.[email] = p.[email] and d.[id] <> p.[id]
