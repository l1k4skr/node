const db = require("../conexion");

class Usuarios {
    constructor(id, nombre, email, edad){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }
    static crearUsuario(nombre, email, edad){
        db.run(`INSERT INTO usuarios (nombre, edad, email) VALUES ("${nombre}", ${edad}, "${email}")`, (err)=>{
            if(err){
                console.error(`Error al crear el usuario: ${err.message}`)
            };
        });
        console.log("Usuario creado exitosamente")
    }
}