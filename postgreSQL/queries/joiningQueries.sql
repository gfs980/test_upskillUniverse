-- Write an SQL query to join the Employees and Departments tables and display a result showing the
-- name of the employee, their department_name, and their salary.

SELECT Employees.name, Departments.department_name, Employees.salary
FROM Employees
JOIN Departments ON Employees.department_id = Departments.id;
