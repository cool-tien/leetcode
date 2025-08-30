/*
  https://leetcode.com/problems/find-books-with-no-available-copies/submissions/1753004579/
    Runtime 686 ms Beats 12.11%
*/
/* Write your T-SQL query statement below */
with
total_borrowers as (
  select 
    [book_id], count([book_id]) as [current_borrowers]
  from borrowing_records 
  where [return_date] is null 
  group by [book_id] 
)

select 
  l.[book_id], l.[title], l.[author], 
  l.[genre], l.[publication_year], t.[current_borrowers]
from library_books l
inner join total_borrowers t on 
  t.[book_id] = l.[book_id] and 
  t.[current_borrowers] = l.[total_copies]
order by t.[current_borrowers] desc, l.[title]