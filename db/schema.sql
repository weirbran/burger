CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
  id INT (3) NOT NULL
  AUTO_INCREMENT, 
  burger_name VARCHAR
  (100) NOT NULL, 
  devoured TINYINT
  (1) NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

  
SELECT * FROM burgers;