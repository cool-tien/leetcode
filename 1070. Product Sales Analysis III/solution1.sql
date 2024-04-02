/*
    1782 ~ 2048 ms  (58.93% ~ 79.66%)
    
    https://leetcode.com/problems/product-sales-analysis-iii/submissions/1220783891/
        Runtime 1981 ms Beats 63.86% of users with PostgreSQL; 
    https://leetcode.com/problems/product-sales-analysis-iii/submissions/1220782763/
        Runtime 2048 ms Beats 58.93% of users with PostgreSQL; 
    https://leetcode.com/problems/product-sales-analysis-iii/submissions/1220879916/
        Runtime 1782 ms Beats 79.66% of users with PostgreSQL; 
*/
-- Write your PostgreSQL query statement below

with
First_Sold as (
    select 
        s.product_id, min(s.year) as first_year
    from Sales s
    group by s.product_id
)

select 
    f.product_id, f.first_year, 
    s.quantity, s.price 
from Sales s 
inner join First_Sold f on 
    f.product_id = s.product_id and 
    f.first_year = s.year 