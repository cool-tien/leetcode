/*
  https://leetcode.com/problems/find-products-with-valid-serial-numbers/submissions/1755338811/
    Runtime 315 ms Beats 54.42%

  collate with Latin1_General_CS_AS for case sensitive
*/
/* Write your T-SQL query statement below */
select * from products 
where 
  [description] collate Latin1_General_CS_AS like '% SN[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9] %' or 
  [description] collate Latin1_General_CS_AS like 'SN[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9] %' or
  [description] collate Latin1_General_CS_AS like '% SN[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'