# Write your MySQL query statement below
SELECT name AS Employee
FROM Employee e
WHERE managerId is NOT Null AND salary > (SELECT salary FROM Employee WHERE id = e.managerId);