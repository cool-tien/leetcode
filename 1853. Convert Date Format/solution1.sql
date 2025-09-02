/*
  https://leetcode.com/problems/convert-date-format/submissions/1756533192/
    Runtime 549 ms Beats 85.19%
*/
/* Write your T-SQL query statement below */
select
  datename(weekday, [day]) + ', ' + datename(month, [day]) + ' ' + datename(day, [day]) + ', ' + datename(year, [day]) as [day]
from Days