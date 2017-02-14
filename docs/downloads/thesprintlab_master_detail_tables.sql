DROP TABLE tsl_impedements
;
DROP TABLE tsl_activities
;

CREATE TABLE tsl_activities
(
    id serial
,   usr_id integer NOT NULL
,   description character varying(100) NOT NULL
,   creationtime date
)
;

ALTER TABLE tsl_activities
    OWNER to vaizrdemo
;

CREATE TABLE tsl_impedements
(
    id serial
,   act_id integer NOT NULL
,   description character varying(100) NOT NULL
)
;

ALTER TABLE tsl_impedements
    OWNER to vaizrdemo
;

ALTER TABLE tsl_activities ADD
  CONSTRAINT tsl_act_pk PRIMARY KEY (id)
;

ALTER TABLE tsl_activities
    ADD CONSTRAINT tsl_act_usr_fk FOREIGN KEY (usr_id)
    REFERENCES urp_users (id)
;

ALTER TABLE tsl_impedements ADD
  CONSTRAINT tsl_imp_pk PRIMARY KEY (id)
;

ALTER TABLE tsl_impedements
    ADD CONSTRAINT tsl_imp_act_fk FOREIGN KEY (act_id)
    REFERENCES tsl_activities (id)
;

