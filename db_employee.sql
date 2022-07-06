--------------------------------------------------------
--  File created - Wednesday-July-06-2022   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table EMPLOYEES
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."EMPLOYEES" 
   (	"id" VARCHAR2(20 BYTE), 
	"first_name" VARCHAR2(20 BYTE), 
	"last_name" VARCHAR2(20 BYTE), 
	"email" VARCHAR2(50 BYTE), 
	"phone_number" VARCHAR2(20 BYTE), 
	"hire_date" VARCHAR2(20 BYTE), 
	"job_id" VARCHAR2(20 BYTE), 
	"salary" VARCHAR2(20 BYTE), 
	"commission_pct" VARCHAR2(20 BYTE), 
	"manager_id" VARCHAR2(20 BYTE), 
	"department_id" VARCHAR2(20 BYTE)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into SYSTEM.EMPLOYEES
SET DEFINE OFF;
Insert into SYSTEM.EMPLOYEES ("id","first_name","last_name","email","phone_number","hire_date","job_id","salary","commission_pct","manager_id","department_id") values ('1','Kimanzi','Mati','martin.kimanzi@virtual-pay.io','0791545527','June 2022','1','2000','10','bossman','tech');
