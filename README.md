# crud_backend
This repository contains code for a management employees app:

Dependencies required:

-  nodejs v14.17.4
-  npm 6.14.14
-  docker 20.10.7, build f0df350
- postgresql instance served by docker with a image like:
 PostgreSQL 13.3 (Debian 13.3-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit
- Express for serving app.
- python3
- psycopg2

## Initializing

1. clone github repository to local folder.
2. Goes to database_container folder and Run `docker-compose up --remove-orphans` to serve postgresql database on `http://localhost:5432`
3. On the same folder, run `python3 database_initializer.py` for create table and the stored procedure.

**Note**: keep running docker during the time period that you need runs your backend app!

## Running app

1. Go to root folder of the repository and Run `node .\index.js`, it will be start the backend app in `http://localhost:3000`

## API use
When the app is running, you can use:

- `http://localhost:3000/api/emp/getEmployees` to get all rows in table.
- `http://localhost:3000/api/emp/getEmployee&<id>` to get data of employee with id_employee equals to <id>.
- `http://localhost:3000/api/emp/createEmployee` to create a new employee.
- `http://localhost:3000/api/emp/updateEmployee` to update data of a employee.
- `http://localhost:3000/api/emp/deleteEmployee` to delete data of employee with id_employee equals to <id>.
  
 
