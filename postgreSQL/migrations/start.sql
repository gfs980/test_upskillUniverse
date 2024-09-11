CREATE DATABASE company_db;


CREATE TABLE Departments (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL
);

CREATE TABLE Employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INTEGER,
    salary INTEGER,
    department_id INTEGER REFERENCES Departments(id)
);