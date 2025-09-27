/*
  https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/submissions/1783798886/
    Runtime 472 ms Beats 100.00% 

  # Approach
  1. In the subquery use condition "r2.[passenger_id] = r1.[driver_id]".
  2. return count(*) in the subquery as [cnt] value.

  # Complexity
  - Time complexity: O(n²)
*/
/* Write your T-SQL query statement below */
select 
  r1.[driver_id], 
  (
    select count(*) from Rides r2
    where r2.[passenger_id] = r1.[driver_id]
  ) as [cnt]
from Rides r1
group by r1.[driver_id]