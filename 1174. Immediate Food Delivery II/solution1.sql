/*
    2054 ~ 2924 ms  (17.13% ~ 65.92%)
    
    [Time taken: 17m 7s]
    https://leetcode.com/problems/immediate-food-delivery-ii/submissions/1218858367/
        Runtime 2200 ms Beats 53.85%; 
    https://leetcode.com/problems/immediate-food-delivery-ii/submissions/1218863109/
        Runtime 2054 ms Beats 65.92%; 
    https://leetcode.com/problems/immediate-food-delivery-ii/submissions/1218863402/
        Runtime 2924 ms Beats 17.13%; 

*/
/* Write your T-SQL query statement below */

with
Early_List as (
    select 
        [customer_id], 
        min([order_date]) as [order_date]
    from Delivery
    group by [customer_id]
)

select
    round(
        sum(
            case 
                when e.[order_date] = d.[customer_pref_delivery_date] then 1.0
                else 0.0
            end
        ) / count(e.[customer_id]) * 100.0
    , 2) as [immediate_percentage]
from Early_List e
inner join Delivery d on 
    d.[customer_id] = e.[customer_id] and 
    d.[order_date] = e.[order_date] 