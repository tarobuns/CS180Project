import mysql from "mysql"

export const db = mysql.createConnection({ //Creates connection to MySQL
    host:"localhost",
    user:"root",
    password:"9274@Jpy7@r",
    database:"social"
});