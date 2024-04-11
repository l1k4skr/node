const db = require("../conexion");

class Usuarios {
    constructor(id, nombre, email, edad){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }
    save(){
        db.run(`INSERT INTO usuarios (nombre, edad, email) VALUES ("${this.nombre}", ${this.edad}, "${this.email}")`)
    }
    
    static mostrarUsuarios(){
        return new Promise((resolve, reject)=>{
            db.all("SELECT * FROM usuarios", (err, rows)=>{
                if(err){
                    console.error(`Error al mostrar los usuarios: ${err.message}`)
                    reject(err);
                } else {
                    resolve(rows)
                }
            });
        })
    }
    static crearUsuario(nombre, email, edad){
        db.run(`INSERT INTO usuarios (nombre, edad, email) VALUES ("${nombre}", ${edad}, "${email}")`, (err)=>{
            if(err){
                console.error(`Error al crear el usuario: ${err.message}`)
            };
        });
    }
}

exports.Usuarios = Usuarios;