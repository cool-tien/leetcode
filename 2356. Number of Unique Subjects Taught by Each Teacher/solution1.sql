/*
    Time Complexity: 
        2620 ~ 3048 ms  (33.26% ~ 68.22%)
    
    https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/submissions/984934433/
        Runtime 2620 ms, Beats 68.22%; 
    https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/submissions/984967790/
        Runtime 3043 ms, Beats 33.47%; 
    https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/submissions/984967950/
        Runtime 3048 ms, Beats 33.26%;

*/
/* Write your T-SQL query statement below */
with 
Unique_Subject as (
    select distinct 
        [teacher_id], [subject_id] 
    from Teacher 
) 
select
    [teacher_id], count([subject_id]) as [cnt]
from Unique_Subject
group by [teacher_id]