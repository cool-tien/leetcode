/*
  https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/submissions/1773374473/
    Runtime 346 ms Beats 60.42% 
*/
/* Write your T-SQL query statement below */
with
TotalRequest as (
  select 
    cast(count(*) as float) as [total]
  from (
    select distinct
      [sender_id], [send_to_id]
    from FriendRequest
  ) temp
), 
TotalAccepted as (
  select 
    count(*) as [total]
  from (
    select distinct 
      [requester_id], [accepter_id]
    from RequestAccepted
  ) temp
)

select
  case 
    when a.[total] = 0 then 0
    else round(a.[total] / (select r.[total] from TotalRequest r), 2)
  end as [accept_rate]
from TotalAccepted a