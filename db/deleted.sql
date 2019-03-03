DELETE FROM heloposts
WHERE id = $1;
SELECT *
FROM heloposts
ORDER BY id DESC;