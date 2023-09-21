# Write your MySQL query statement below
SELECT p.email as Email 
FROM Person p
GROUP BY email 
HAVING COUNT(email) > 1; 