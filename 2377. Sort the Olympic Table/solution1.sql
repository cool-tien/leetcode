/*
  https://leetcode.com/problems/sort-the-olympic-table/submissions/1772176123/
    Runtime 363 ms Beats 60.00%
*/
/* Write your T-SQL query statement below */
select * from Olympic
order by [gold_medals] desc, [silver_medals] desc, [bronze_medals] desc, [country]