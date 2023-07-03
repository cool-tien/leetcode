/*
    Time Complexity: 
        1622 ~ 2079 ms  (15.96% ~ 54.76%)
    
    https://leetcode.com/problems/invalid-tweets/submissions/984960734/
        Runtime 2079 ms, Beats 15.96%; 
    https://leetcode.com/problems/invalid-tweets/submissions/984973965/
        Runtime 1622 ms, Beats 54.76%; 
    https://leetcode.com/problems/invalid-tweets/submissions/984974167/
        Runtime 1649 ms, Beats 51.24%;

*/
/* Write your T-SQL query statement below */
select 
    [tweet_id]
from Tweets
where len([content]) > 15