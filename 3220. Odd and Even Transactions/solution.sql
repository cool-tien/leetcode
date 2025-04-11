/*
  https://leetcode.com/problems/odd-and-even-transactions/submissions/1603611876/
*/
select 
  [transaction_date], 
  sum(iif([amount] % 2 = 1, [amount], 0)) as [odd_sum], 
  sum(iif([amount] % 2 = 0, [amount], 0)) as [even_sum] 
from transactions 
group by [transaction_date] 