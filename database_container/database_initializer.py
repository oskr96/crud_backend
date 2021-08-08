import psycopg2

print('opening connection')

conn = psycopg2.connect(
    host="localhost",
    user="postgres",
    password="passs",
    database="crud_bank")
conn.set_session(autocommit=True)

curs = conn.cursor()

print('Initializing...')

#para limpiar
query = """
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;

CREATE TABLE Employees (
    id_employee SERIAL PRIMARY KEY,
    fullname VARCHAR(50),
    charge VARCHAR(50),
    address VARCHAR(50),
    salary INT,
    email VARCHAR(50),
    id_boss INT NULL,
    CONSTRAINT boss_fk FOREIGN KEY (id_boss) REFERENCES employees (id_employee)
);
"""
curs.execute(query)

print('Inserting stored procedures')
query = """
CREATE OR REPLACE PROCEDURE Employee (id_employee_p int,
                                      fullname_p varchar(50),
                                      charge_p varchar(50),
                                      address_p varchar(50),
                                      salary_p int,
                                      email_p varchar(50),
                                      id_boss_p int = Null,
                                      StatementType VARCHAR(20) = '')
AS $$
BEGIN
    IF StatementType = 'Insert' THEN 
        IF id_boss_p = 0 THEN
            INSERT INTO Employees (fullname, charge, address, salary, email, id_boss) 
            VALUES (fullname_p, charge_p, address_p, salary_p, email_p, Null);
        ELSE
            INSERT INTO Employees (fullname, charge, address, salary, email, id_boss) 
            VALUES (fullname_p, charge_p, address_p, salary_p, email_p, id_boss_p);
        END IF;
        
    ELSIF StatementType = 'Update' THEN
        UPDATE Employees
            SET    fullname = fullname_p,
                   charge = charge_p,
                   address = address_p,
                   salary = salary_p,
                   email = email_p,
                   id_boss = id_boss_p
            WHERE  id_employee = id_employee_p;
    ELSIF StatementType = 'Delete' THEN
        DELETE FROM Employees
        WHERE  id_employee_p = id_employee_p;
    END IF;
END
$$ LANGUAGE plpgsql;

"""
curs.execute(query)

print('Inserting sample data')
query = """
CALL Employee(0, 'juan', 'president', 'cll 21 k 12', 10000, 'a@mm.com', 0, 'Insert');
CALL Employee(0, 'pedro', 'web', 'cll 21 k 12', 3000, 'a@mm.com', 1, 'Insert');
CALL Employee(0, 'pepito', 'architect', 'cll 21 k 12', 1000, 'a@mm.com', 1, 'Insert');
CALL Employee(0, 'juanito', 'qa', 'cll 21 k 12', 5000, 'a@mm.com', 2, 'Insert');
CALL Employee(0, 'juana', 'accounting', 'cll 21 k 12', 1500, 'a@mm.com', 2, 'Insert');
"""

curs.execute(query)

#cerrar la conexion
conn.close()

print('Database ready')