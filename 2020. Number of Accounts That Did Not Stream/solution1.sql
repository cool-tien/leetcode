/*
  https://leetcode.com/problems/number-of-accounts-that-did-not-stream/submissions/1787806884/
    Runtime 682 ms Beats 80.00% 
*/
/* Write your T-SQL query statement below */
select 
  count(sub.[account_id]) as [accounts_count]
from Subscriptions sub 
left join Streams srm on srm.[account_id] = sub.[account_id] 
where 
  year(sub.[end_date]) = 2021 and 
  (year(srm.[stream_date]) != 2021 or srm.[stream_date] is null)