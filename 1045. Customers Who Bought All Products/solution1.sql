/*
    2376 ~ 3069 ms      (64.74% ~ 98.80%)
    
    [Time taken: 13m 0s]
    https://leetcode.com/problems/customers-who-bought-all-products/submissions/1219701998/
        Runtime 2800 ms Beats 81.74% of users with MS SQL Server; 
    https://leetcode.com/problems/customers-who-bought-all-products/submissions/1219702923/
        Runtime 2376 ms Beats 98.80% of users with MS SQL Server; 
    https://leetcode.com/problems/customers-who-bought-all-products/submissions/1219709830/
        Runtime 3069 ms Beats 64.74% of users with MS SQL Server; 
*/
/* Write your T-SQL query statement below */
declare @total_product int;
set @total_product = (select count(*) from Product);

with 
Bought_Unique as (
    select distinct
        customer_id, product_key 
    from Customer 
)

select 
    customer_id
from Bought_Unique 
group by customer_id
having count(customer_id) = @total_product