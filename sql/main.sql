* SELECT - extracts data from a database
* UPDATE - updates data in a database
* DELETE - deletes data from a database
* INSERT INTO - inserts new data into a database
* CREATE DATABASE - creates a new database
* ALTER DATABASE - modifies a database
* CREATE TABLE - creates a new table
* ALTER TABLE - modifies a table
* DROP TABLE - deletes a table
* CREATE INDEX - creates an index (search key)
* DROP INDEX - deletes an index
*

mysql > SOURCE /Users/Your_username/Downloads/sample.sql;

SELECT * FROM employees ORDER BY firstname; => Sort by firstname
SELECT * FROM employees ORDER BY firstname DESC; SORT BY DESCENDING ORDER
SELECT email FROM employees WHERE employeeNumber > 1600 AND firstName='Mami';
SELECT COUNT(DISTINCT jobTitle) FROM employees;
SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;

INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
UPDATE employees SET lastName='Jolik' WHERE employeeNumber=4;

MANY
UPDATE employees SET lastName='Jolik' WHERE officeCode=6;

DELETE FROM table_name WHERE condition;
DELETE FROM employees WHERE employeeNumber=4;

DELETE ALL ROWS
DELETE FROM table_name;


SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;


SELECT email FROM employees WHERE employeeNumber > 1000 limit 5;
+---------------------------------+
| email                           |
+---------------------------------+
| dmurphy@classicmodelcars.com    |
| mpatterso@classicmodelcars.com  |
| jfirrelli@classicmodelcars.com  |
| wpatterson@classicmodelcars.com |
| gbondur@classicmodelcars.com    |
+---------------------------------+

MIN(), MAX()
SELECT MAX(employeeNumber) AS minPrice FROM employees;
+----------+
| minPrice |
+----------+
|     1702 |
+----------+
1 row in set (0.00 sec)

SELECT COUNT(*) FROM employees WHERE employeeNumber > 1400;
+----------+
| COUNT(*) |
+----------+
|        9 |
+----------+
1 row in set (0.00 sec)

The following SQL statement selects all customers that are NOT located in "Germany", "France" or "UK":
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');




SELECT email  FROM employees WHERE employeeNumber BETWEEN 1400 AND 1620;

26518
