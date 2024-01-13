/*
    【Approach】
    
    1. Use "row_number()" and group "[visited_on]" to generate row id for mark the visited date.
    2. Start from the 7th date to calculate "seven days window" total amount.
    3. "[amount]" divided by 7 days to get "average amount"
       (can't use avg(), it will divided by number of row data)
    

    633 ~ 900 ms    (29.42% ~ 68.57%)

    https://leetcode.com/problems/restaurant-growth/submissions/1145320711/
        Runtime 671 ms Beats 60.67%; 
    https://leetcode.com/problems/restaurant-growth/submissions/1145337891/
        Runtime 633 ms Beats 68.57%; 
    https://leetcode.com/problems/restaurant-growth/submissions/1145338159/
        Runtime 900 ms Beats 29.42%; 

*/
/* Write your T-SQL query statement below */

with 
Visit_Date as (
    select 
        row_number() over (order by [visited_on]) as [row_id], 
        [visited_on]
    from Customer
    group by [visited_on]
), 
Total_Amount as (
    select 
        main.[visited_on], 
        (
            select 
                round(sum(cast([amount] as float)), 2)
            from Customer
            where 
                [visited_on] > dateadd(day, -7, main.[visited_on])
                and
                [visited_on] <= main.[visited_on]
        ) as [amount]
    from Visit_Date main
    where [row_id] >= 7
)

select 
    [visited_on], [amount], 
    round([amount] / 7.0, 2) as [average_amount]
from Total_Amount