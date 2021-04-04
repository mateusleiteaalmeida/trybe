SELECT department_id,
AVG(salary) 'média salarial' ,
COUNT(*) 'número de empregados' 
FROM hr.employees 
GROUP BY department_id
HAVING `número de empregados` > 10;