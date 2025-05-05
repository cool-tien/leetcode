/*
  https://leetcode.com/problems/find-cities-in-each-state-ii/submissions/1625901453/
*/
with 
StateList as (
  select 
    [state], 
    string_agg([city], ', ') within group (order by [city]) as [cities], 
    count([city]) as [total_city], 
    --  count matched letters 
    sum( 
      case 
        when left([state], 1) = left([city], 1) then 1 
        else 0 
      end 
    ) as [matching_letter_count] 
  from Cities 
  group by [state] 
)

select
  [state], [cities], [matching_letter_count]
from StateList 
where 
  [total_city] >= 3 and 
  [matching_letter_count] >= 1 
order by [matching_letter_count] desc, [state] 