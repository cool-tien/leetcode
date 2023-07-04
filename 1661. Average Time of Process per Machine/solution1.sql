/*
    Time Complexity: 
        373 ~ 703 ms    (24.24% ~ 89.77%)
    
    https://leetcode.com/problems/average-time-of-process-per-machine/submissions/985127418/
        Runtime 703 ms, Beats 24.24%; 
    https://leetcode.com/problems/average-time-of-process-per-machine/submissions/985761665/
        Runtime 373 ms, Beats 89.77%; 
    https://leetcode.com/problems/average-time-of-process-per-machine/submissions/985761888/
        Runtime 489 ms, Beats 58.10%; 

*/
/* Write your T-SQL query statement below */
with
Process as (
    select 
        [machine_id], [process_id], 
        sum(case when [activity_type] = 'start' then -[timestamp] else [timestamp] end) as [total_processing_time]
    from Activity 
    group by [machine_id], [process_id]
)

select
    [machine_id], 
    round(
        sum([total_processing_time]) / count([machine_id])
    , 3) as [processing_time]
from Process
group by [machine_id]