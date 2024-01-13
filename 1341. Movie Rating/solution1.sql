/*
    765 ms ~ 857 ms     (76.27% ~ 86.91%)
    
    https://leetcode.com/problems/movie-rating/submissions/1144896287/
        Runtime 857 ms Beats 76.27%;
    https://leetcode.com/problems/movie-rating/submissions/1144896580/
        Runtime 765 ms Beats 86.91%; 
    https://leetcode.com/problems/movie-rating/submissions/1144896724/
        Runtime 765 ms Beats 86.91%; 

*/
/* Write your T-SQL query statement below */

with
User_Rate as (
    select 
        MovieRating.[user_id], count(MovieRating.[user_id]) as [total_rated], 
        Users.[name]
    from MovieRating
    inner join Users on Users.[user_id] = MovieRating.[user_id]
    group by MovieRating.[user_id], Users.[name]
), 
Highest_Rate as (
    select 
        MovieRating.[movie_id], avg(cast(MovieRating.[rating] as float)) as [avg_rate], 
        Movies.[title]
    from MovieRating
    inner join Movies on Movies.[movie_id] = MovieRating.[movie_id]
    where MovieRating.[created_at] >= '2020-02-01' and MovieRating.[created_at] <= '2020-02-29'
    group by MovieRating.[movie_id], Movies.[title]
)
select [results]
from (
    --  rated the greatest number of movies
    select top 1
        [name] as [results]
    from User_Rate
    order by [total_rated] desc, [name] asc
    union all
    --  highest average
    select top 1
        [title] as [results]
    from Highest_Rate
    order by [avg_rate] desc, [title] asc
) as CombinedResults