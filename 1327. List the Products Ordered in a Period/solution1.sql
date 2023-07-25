/*
    Time Complexity: 
        614 ~ 1005 ms   (19.15% ~ 70.73%)

    https://leetcode.com/problems/list-the-products-ordered-in-a-period/submissions/985366727/
        Runtime  862 ms, Beats 28.80%; 
    https://leetcode.com/problems/list-the-products-ordered-in-a-period/submissions/986151397/
        Runtime 1005 ms, Beats 19.15%; 
    https://leetcode.com/problems/list-the-products-ordered-in-a-period/submissions/986151918/
        Runtime  614 ms, Beats 70.73%; 

*/
/* Write your T-SQL query statement below */
with
Total_Orders as (
    select 
        [product_id], sum([unit]) as [unit]
    from Orders 
    where [order_date] >= '2020-02-01' and [order_date] <= '2020-02-29' 
    group by [product_id] 
)

select
    p.[product_name], t.[unit]
from Total_Orders t
inner join Products p on p.[product_id] = t.[product_id]
where t.[unit] >= 100