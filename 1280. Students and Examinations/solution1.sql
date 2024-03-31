/*
    828 ~ 884 ms    (16.38% ~ 82.68%)
    
    https://leetcode.com/problems/students-and-examinations/submissions/1218666037/
        Runtime 1366 ms Beats 16.38%; 
    https://leetcode.com/problems/students-and-examinations/submissions/1218898628/
        Runtime  828 ms Beats 82.68%; 
    https://leetcode.com/problems/students-and-examinations/submissions/1218898921/
        Runtime  884 ms Beats 73.63%; 

*/
/* Write your T-SQL query statement below */
/*
    # Approach
    1. "Attedded" table for count record the attended exams.
    2. cross join for generate "Students" and "Subjects" table list.
    3. left join for attended exams if exist.
*/
with 
Attended as (
    select
        [student_id], [subject_name], 
        count([subject_name]) as [attended_exams]
    from Examinations 
    group by [student_id], [subject_name]
)

select 
    stud.[student_id], stud.[student_name], subj.[subject_name], 
    isnull(attd.[attended_exams], 0) as [attended_exams] 
from Students stud 
cross join Subjects subj 
left join Attended attd on 
    attd.[student_id] = stud.[student_id] and 
    attd.[subject_name] = subj.[subject_name] 
order by stud.[student_id], subj.[subject_name] 