/*
  https://leetcode.com/problems/second-day-verification/submissions/1758860441/
    Runtime 300 ms Beats 100.00% 
*/
/* Write your T-SQL query statement below */
select 
  [user_id]
from emails e 
inner join texts t on t.[email_id] = e.[email_id]
where 
  datediff(day, e.[signup_date], t.[action_date]) = 1 and
  [signup_action] = 'Verified'
order by [user_id] 