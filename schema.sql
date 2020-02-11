DROP DATABASE IF EXISTS nodelogin;
CREATE DATABASE nodelogin;
USE nodelogin;

CREATE TABLE `accounts` (
  `id` Int (11) AUTO INCREMENT NOT NULL,
  `username` VARCHAR (50) NOT NULL,
  `password` VARCHAR (255) NOT NULL,
  `email` VARCHAR (100) NOT NULL,
  PRIMARY KEY ('id')
) 

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');
