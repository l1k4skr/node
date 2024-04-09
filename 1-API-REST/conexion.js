const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./usuarios.db", (err)=>{
    if(err){
        console.error(`Error al conectarse a la base de datos: ${err.message}`)
    } else {
        console.log("Conexión exitosa a la base de datos")
    }
});

module.exports = db;