DROP DATABASE IF EXISTS nodelogin;
CREATE DATABASE nodelogin;
USE nodelogin;

CREATE TABLE `accounts` (
  `id` Int (11) AUTO INCREMENT NOT NULL,
  'firstname' VARCHAR (13) NOT NULL,
  'lastname' VARCHAR (13) NOT NULL,
  `username` VARCHAR (50) NOT NULL,
  `password` VARCHAR (255) NOT NULL,
  `email` VARCHAR (100) NOT NULL,
  PRIMARY KEY ('id')
) 

INSERT INTO `accounts` (`id`, 'firstname', 'lastname',`username`, `password`, `email`) VALUES (1, 'robert', 'harley', 'test', 'test', 'test@test.com');
