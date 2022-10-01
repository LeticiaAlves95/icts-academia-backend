async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    // "mysql://<usuario>:<senha>@<ip>:<porta>/<schema>"
    const connection = await mysql.createConnection("mysql://root:password@localhost:3307/academia_db");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function listarCliente(){
    const conexao = await connect();
    const [rows] = await conexao.query('SELECT * FROM cliente;');
    return rows;  
}

/* function listarCliente() {
    var clientes=[
        {
            nome:"Leticia",
            cpf: "123456789101"
        },
        {
            nome:"Helena",
            cpf: "123456789102"
        },
        {
            nome:"Geovana",
            cpf: "123456789103"
        }
    ]

    return clientes;
} */

module.exports={listarCliente}