/*
    Time Complexity: 
        461 ~ 983 ms    (11.43% ~ 87.70%)
    
    https://leetcode.com/problems/average-selling-price/submissions/984491686/
        Runtime 833 ms, Beats 19.77%; 
    https://leetcode.com/problems/average-selling-price/submissions/984583506/
        Runtime 983 ms, Beats 11.43%; 
    https://leetcode.com/problems/average-selling-price/submissions/984583867/
        Runtime 461 ms, Beats 87.70%; 

*/
/* Write your T-SQL query statement below */
select
    p.[product_id], 
    round(cast(sum(p.[price] * us.[units]) as float) / sum(us.[units]), 2) as [average_price]
from Prices p
inner join UnitsSold us on 
    p.[product_id] = us.[product_id] and
    us.[purchase_date] >= p.[start_date] and 
    us.[purchase_date] <= p.[end_date]
group by p.[product_id]