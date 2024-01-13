/*
    628 ms ~ 1401 ms    (26.18% ~ 98.69%)
    
    https://leetcode.com/problems/movie-rating/submissions/1144812040/
        Runtime 1401 ms Beats 26.18%; 
    https://leetcode.com/problems/movie-rating/submissions/1144894032/
        Runtime  628 ms Beats 98.69%;
    https://leetcode.com/problems/movie-rating/submissions/1144894470/
        Runtime  651 ms Beats 97.22%; 

*/
/* Write your T-SQL query statement below */

select [results] from (
    select top 1 
        Users.[name] as [results]
    from MovieRating
    inner join Users on Users.[user_id] = MovieRating.[user_id]
    group by MovieRating.[user_id], Users.[name]
    order by count(MovieRating.[user_id]) desc, Users.[name]
) User_Rate
union all
select [results] from (
    select top 1 
        Movies.[title] as [results]
    from MovieRating
    inner join Movies on Movies.[movie_id] = MovieRating.[movie_id]
    where MovieRating.[created_at] >= '2020-02-01' and MovieRating.[created_at] <= '2020-02-29'
    group by MovieRating.[movie_id], Movies.[title]
    order by avg(cast(MovieRating.[rating] as float)) desc, Movies.[title]
) Highest_Rate