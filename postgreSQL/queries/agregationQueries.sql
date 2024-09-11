-- Write an SQL query to calculate the average salary of employees per department.
SELECT Departments.department_name, AVG(Employees.salary) AS average_salary
FROM Employees
JOIN Departments ON Employees.department_id = Departments.id
GROUP BY Departments.department_name;
