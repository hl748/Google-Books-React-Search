CREATE DATABASE EMS;
USE EMS;

CREATE TABLE employees (
    id INT,
    first_name VARCHAR(10) NOT NULL,
    last_name VARCHAR (10) NOT NULL,
    role_id INT(10),
    manager_id INT(10),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT,
    title VARCHAR(10),
    salary decimal,
    department_id INT(10),
    PRIMARY KEY (id)
);

CREATE TABLE department (
    id INT,
    names VARCHAR(10),
    PRIMARY KEY (id)
);