/*
  https://leetcode.com/problems/number-of-comments-per-post/submissions/1772192671/
    Runtime 1800 ms Beats 94.44% 
  
# Approach
1. Left join and filter with which [parent_id] is null (those are parent posts). 
2. Group by parent.[sub_id] and count with distinct of child.[sub_id] (repeat appear count as once). 
*/
/* Write your T-SQL query statement below */
select 
  parent.[sub_id] as [post_id], 
  count(distinct child.[sub_id]) as [number_of_comments]
from Submissions parent 
left join Submissions child on child.[parent_id] = parent.[sub_id]
where parent.[parent_id] is null
group by parent.[sub_id] 
order by parent.[sub_id] 