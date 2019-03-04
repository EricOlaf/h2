INSERT INTO helousers
    (username, passwo)
VALUES($1, $2);
SELECT *
FROM helousers
WHERE username = $1 and passwo =$2;