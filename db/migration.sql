DROP TABLE IF EXISTS goals;

CREATE TABLE goals(
     id serial,
    goals text
);



INSERT INTO goals(goals) VALUES('get milk');
INSERT INTO goals(goals) VALUES('lose 10 lb');
INSERT INTO goals(goals) VALUES('go to cancun');
INSERT INTO goals(goals) VALUES('finish a fullstack project');