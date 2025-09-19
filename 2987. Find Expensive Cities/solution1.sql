/*
  https://leetcode.com/problems/find-expensive-cities/submissions/1775587317/
    Runtime 369 ms Beats 44.44%
*/
/* Write your T-SQL query statement below */
select 
  [city]
from Listings
group by [city]
having avg([price]) > (select avg([price]) from Listings)
order by [city]