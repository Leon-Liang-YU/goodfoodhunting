CREATE DATABASE goodfoodhunting

CREATE TABLE dishes(
    id SERIAL PRIMARY KEY,
    title TEXT,
   
    image_url TEXT,
    user_id integer


);

CREATE TABLE users(
    id SERIAL PRIMARY key,
    email TEXT,
    passwotd_digest TEXT
);

INSERT INTO 

UPDATE dishes(pudding, image_url) SET image_url = 'https://cookingwithdog.com/wp-content/uploads/2017/01/custard-pudding-00-1024x576.jpg' WHERE image_url = 'http';
√insert INTO dishes (title, image_url) values ('cake', 'http');
INSERT INTO dishes (title, image_url) values('pudding', 'http');


UPDATE dishes SET image_url = 'https://media.timeout.com/images/103134792/750/562/image.jpg' where title = 'cake';



alter table dishes add column user_id integer;

update dishes set user_id = 1;