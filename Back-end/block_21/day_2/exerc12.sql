SELECT m.title
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON b.movie_id = m.id
WHERE b.international_sales >= 500000000 AND m.length_minutes > 110;

SELECT m.title
FROM Pixar.Movies AS m
WHERE m.id IN (
    SELECT b.movie_id FROM Pixar.BoxOffice AS b
    WHERE b.international_sales >= 500000000
)
AND m.length_minutes > 110;