USE theLab_db;


INSERT INTO Posts (id, body, groupLimit, authorEmail, createdAt, UpdatedAt) VALUES (1, 'I have this wonderful idea for an app', 5, 'jen-kim@bootcampstudent.edu', '2020-10-10 10:30:00', '2020-10-10 10:30:00');
INSERT INTO Posts (id, body, groupLimit, authorEmail, createdAt, UpdatedAt) VALUES (2, 'I want to build a Sequelize DB with someone', 6, 'chase-and@bootcampstudent.edu', '2020-10-10 10:30:00', '2020-10-10 10:30:00');
INSERT INTO Posts (id, body, groupLimit, authorEmail, createdAt, UpdatedAt) VALUES (3, 'I create a shopping list app', 3, 'chase-and@bootcampstudent.edu', '2020-10-10 10:30:00', '2020-10-10 10:30:00');
INSERT INTO Posts (id, body, groupLimit, authorEmail, createdAt, UpdatedAt) VALUES (4, 'I create a boolean', 5, 'chase-and@bootcampstudent.edu', '2020-10-10 10:30:00', '2020-10-10 10:30:00' );

INSERT INTO Users (user_name) VALUES ('Mr.TWO');
INSERT INTO Users (user_name) VALUES ('Ms.ONE');

create database theLab_db;