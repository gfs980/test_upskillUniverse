-- Select all employees with a salary greater than 50,000.
SELECT * 
FROM Employees 
WHERE salary > 50000;

-- Retrieve all employees from the "Sales" department.
SELECT * 
FROM Employees WHERE department_id = 
    (SELECT id FROM Departments WHERE department_name = 'Sales');

-- Get the total salary being paid to employees in the "Engineering" department.
SELECT SUM(salary) AS total_salary 
FROM Employees WHERE department_id = 
    (SELECT id FROM Departments WHERE department_name = 'Engineering');
