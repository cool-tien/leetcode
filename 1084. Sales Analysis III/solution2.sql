/*
    4707 ~ 5561 ms  (26.16% ~ 97.22%)

    https://leetcode.com/submissions/detail/852054309/
        Runtime: 5561 ms, faster than 26.16% of MS SQL Server online submissions for Sales Analysis III.
    https://leetcode.com/submissions/detail/852054912/
        Runtime: 4707 ms, faster than 97.22% of MS SQL Server online submissions for Sales Analysis III.
    https://leetcode.com/submissions/detail/852056827/
        Runtime: 5356 ms, faster than 41.19% of MS SQL Server online submissions for Sales Analysis III.
*/
/* Write your T-SQL query statement below */
with
other_month as (
    select distinct
        [product_id] 
    from Sales 
    where [sale_date] <= '2018-12-31' or [sale_date] >= '2019-04-01'
),
--  only sold in first quarter
only_sold as (
    select 
        [product_id]
    from Sales main
    where not exists (
        select
            sub.[product_id]
        from other_month sub
        where sub.[product_id] = main.[product_id]
    )
    group by [product_id]
)
select
    only_sold.[product_id], Product.[product_name] 
from only_sold
inner join Product on Product.[product_id] = only_sold.[product_id]