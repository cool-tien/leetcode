/*
    809 ~ 932 ms    (25.43% ~ 40.44%)
    
    [ugly solution]
    https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/submissions/1219312519/
        Runtime 932 ms Beats 25.43%; 
    https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/submissions/1219320680/
        Runtime 908 ms Beats 28.01%; 
    https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/submissions/1219321130/
        Runtime 809 ms Beats 40.44%; 

*/
/* Write your T-SQL query statement below */

with 
Request as (
    select 
        requester_id, count(requester_id) as request_number
    from RequestAccepted 
    group by requester_id 
), 
Accept as (
    select 
        accepter_id, count(accepter_id) as accepter_number
    from RequestAccepted 
    group by accepter_id 
), 
ID_List as (
    select distinct requester_id as id from RequestAccepted
    union 
    select distinct accepter_id as id from RequestAccepted
), 
Friend_Numbers as (
    select 
        list.id, 
        (
            isnull(r.request_number, 0) + 
            isnull(a.accepter_number, 0)
        ) as num
    from ID_List list 
    left join Request r on r.requester_id = list.id 
    left join Accept a on a.accepter_id = list.id 
) 

select top 1
    id, num
from Friend_Numbers 
order by num desc