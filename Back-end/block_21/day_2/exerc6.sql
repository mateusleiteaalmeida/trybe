SELECT title FROM Movies
WHERE id IN (
    SELECT movie_id from BoxOffice
    WHERE rating > 7.5
);

SELECT m.title
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON b.movie_id = m.id
WHERE b.rating > 7.5;