/*
    1017 ~ 1119 ms  (79.64% ~ 97.19%)

    https://leetcode.com/submissions/detail/849887272/
        Runtime: 1119 ms, faster than 79.64% of MS SQL Server online submissions for Sales Person.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Sales Person.
    https://leetcode.com/submissions/detail/849889013/
        Runtime: 1031 ms, faster than 95.57% of MS SQL Server online submissions for Sales Person.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Sales Person.
    https://leetcode.com/submissions/detail/849889870/
        Runtime: 1017 ms, faster than 97.19% of MS SQL Server online submissions for Sales Person.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Sales Person.
*/
/* Write your T-SQL query statement below */
with 
--  salesman have order with 'RED' Company
sales_list as (
    select [sales_id] from Orders o
    where [com_id] = (
        select [com_id] from Company 
        where [name] = 'RED'
    )
)
select [name] from SalesPerson 
where not exists (
    select sales_list.[sales_id] from sales_list
    where sales_list.[sales_id] = SalesPerson.[sales_id]
)