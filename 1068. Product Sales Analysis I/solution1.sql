/*
    Time Complexity: 
        5040 ~ 5717 ms  (15.75% ~ 78.67%)
    
    https://leetcode.com/problems/product-sales-analysis-i/submissions/984495360/
        Runtime 5660 ms, Beats 21.29%; 
    https://leetcode.com/problems/product-sales-analysis-i/submissions/984585429/
        Runtime 5717 ms, Beats 15.75%;
    https://leetcode.com/problems/product-sales-analysis-i/submissions/984587004/
        Runtime 5040 ms, Beats 78.67%; 

*/
/* Write your T-SQL query statement below */
select
    p.[product_name], s.[year], s.[price]
from Sales s
inner join Product p on s.[product_id] = p.[product_id]