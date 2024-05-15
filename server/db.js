import mysql from 'mysql2/promise';
// $ npm i mysql2


// Duomenu bazes nustatymai, rysys su duombaze ir eksportavimas:
// console.log(connection);


let connection = null;

try {
    connection = await mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
    }
);

    await connection.query('USE vinted_project');

    // const sql = 'SELECT * FROM users WHERE id = 2;';
    // const ats = await connection.execute(sql);
    // console.log(ats[0]);

} catch (error){
    // throw sustoja programa, nukilina viska...
    throw error;
}

export { connection };


