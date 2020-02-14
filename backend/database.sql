CREATE TYPE COMPLETED AS(
	problem INTEGER,
	attempts INTEGER
);
CREATE TABLE scores(
	user_name CHAR(50) NOT NULL,
	comp CHAR(50) NOT NULL,
	problems COMPLETED[] NOT NULL
);
CREATE TABLE users(
	user_name CHAR(50) NOT NULL UNIQUE,
	password CHAR(50) NOT NULL,
	current_comp CHAR(50)
);
CREATE TABLE competitions(
	comp_name VARCHAR (50) NOT NULL UNIQUE,
	num_of_problems INTEGER NOT NULL
);
