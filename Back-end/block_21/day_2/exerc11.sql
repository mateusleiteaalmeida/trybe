SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM Pixar.Movies t1, Pixar.Movies t2
WHERE t1.director = t2.director AND t1.title <> t2.title;