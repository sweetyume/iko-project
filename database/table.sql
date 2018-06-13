CREATE TABLE user
(
    user_id SERIAL PRIMARY KEY,
    user_lastname VARCHAR(30) NOT NULL,
    user_firstname VARCHAR(30) NOT NULL,
    user_email VARCHAR(60) NOT NULL,
    user_password VARCHAR NOT NULL
)
