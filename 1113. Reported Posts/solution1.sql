/*
  https://leetcode.com/problems/reported-posts/submissions/1757709574/
    Runtime 1280 ms Beats 95.92% 
*/
/* Write your T-SQL query statement below */
select 
  [extra] as [report_reason], 
  count(distinct [post_id]) as [report_count]
from Actions 
where [action_date] = '2019-07-04' and [action] = 'report'
group by [extra]