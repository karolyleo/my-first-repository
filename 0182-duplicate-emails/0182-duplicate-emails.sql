# Write your MySQL query statement below
SELECT p.email as Email 
FROM Person p
WHERE (SELECT COUNT(a.email) FROM Person a WHERE a.email = p.email) > 1
GROUP BY email 