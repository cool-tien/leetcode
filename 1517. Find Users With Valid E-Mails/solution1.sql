/*  
    1914 ~ 2340 ms  (35.24% ~ 64.61%)
    
    [Refer solution]

    https://leetcode.com/problems/find-users-with-valid-e-mails/submissions/1218012370/
        Runtime 2340 ms Beats 35.24%; 
    https://leetcode.com/problems/find-users-with-valid-e-mails/submissions/1218043292/
        Runtime 2045 ms Beats 52.57%; 
    https://leetcode.com/problems/find-users-with-valid-e-mails/submissions/1218043921/
        Runtime 1914 ms Beats 64.61%; 

*/
/* Write your T-SQL query statement below */

select * from Users 
where 
    right([mail], 13) = '@leetcode.com' and 
    [mail] like '[a-zA-Z]%' and 
    left([mail], len([mail]) - 13) not like'%[^0-9a-zA-Z_.-]%'
