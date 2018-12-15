SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;



SET default_tablespace = '';

SET default_with_oids = false;

DROP TABLE IF EXISTS people;

CREATE TABLE people
(
    id serial NOT NULL,
    first_name text NOT NULL,
    email text NOT NULL,
    PRIMARY KEY (id)
);
ALTER TABLE people OWNER TO docker;

insert into people (first_name, email) values ('Lainey', 'lrozalski0@bizjournals.com');
insert into people (first_name, email) values ('Frederick', 'fgoley1@salon.com');
insert into people (first_name, email) values ('Noell', 'nlavielle2@fc2.com');
insert into people (first_name, email) values ('Bird', 'bkeggins3@unc.edu');
insert into people (first_name, email) values ('Hoebart', 'hlinforth4@ehow.com');
insert into people (first_name, email) values ('Ashli', 'abussons5@mail.ru');
insert into people (first_name, email) values ('Sibley', 'skelemen6@unicef.org');
insert into people (first_name, email) values ('Aimil', 'adrinnan7@nasa.gov');
insert into people (first_name, email) values ('Debor', 'dblackman8@ebay.com');
insert into people (first_name, email) values ('Lynnell', 'lcosbee9@comsenz.com');