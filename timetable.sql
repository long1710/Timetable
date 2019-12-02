DROP DATABASE IF EXISTS timetable;
CREATE DATABASE timetable;
use timetable;

CREATE TABLE timetableProject(
	ID int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username varChar(255) NOT NULL,
    pass varChar(255) NOT NULL
);