/*
    850 ~ 888 ms    (56.06% ~ 67.65%)

    https://leetcode.com/submissions/detail/850473133/
        Runtime: 864 ms, faster than 63.15% of MS SQL Server online submissions for Daily Leads and Partners.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Daily Leads and Partners.
    https://leetcode.com/submissions/detail/850473804/
        Runtime: 888 ms, faster than 56.06% of MS SQL Server online submissions for Daily Leads and Partners.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Daily Leads and Partners.
    https://leetcode.com/submissions/detail/850473945/
        Runtime: 850 ms, faster than 67.65% of MS SQL Server online submissions for Daily Leads and Partners.
        Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Daily Leads and Partners.
*/
/* Write your T-SQL query statement below */
select
    [date_id], [make_name], 
    count(distinct [lead_id]) as [unique_leads], 
    count(distinct [partner_id]) as [unique_partners]
from DailySales
group by [date_id], [make_name]