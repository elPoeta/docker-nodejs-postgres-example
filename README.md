# docker-nodejs-postgres-example
Using docker compose for development node js and postgresql application

# How to use?

```
$ docker-compose build
```

```
$ docker-compose up
```

### Setup postgresql

    * open pgadmin
    * create server
        ```
        User: apidocker
        password: password 
        ```
    * create database named apidocker
    * create table named languages
    
        ```
        CREATE TABLE public.languages
            (
            id integer NOT NULL DEFAULT nextval('languages_id_seq'::regclass),
            name character varying(50) COLLATE pg_catalog."default" NOT NULL,
            image text COLLATE pg_catalog."default",
            likes integer DEFAULT 0,
            CONSTRAINT languages_pkey PRIMARY KEY (id)
            )
        WITH (
            OIDS = FALSE
            )
            TABLESPACE pg_default;

            ALTER TABLE public.languages
            OWNER to apidocker;
        ```

Open your browser and type https://localhost:3000