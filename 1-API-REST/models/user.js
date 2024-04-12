/*
Vamos a simular una base de datos de usuarios con SQLite3
Para ello vamos a crear una clase Usuarios que tendrá los siguientes métodos y propiedades:
Propiedades:
- id: number
- nombre: string
- email: string
- edad: number
- fecha de nacimiento: string
- género: string
- número de teléfono: string
- dirección: string
- última fecha de inicio de sesión: string
- estado de la cuenta: string
- rol del usuario: string
- avatar: string
*/



const db = require("../conexion");

class Usuarios {
    constructor(id, nombreUsuario, email, password, edad, fechaNacimiento, genero, telefono, direccion, ultimaFechaInicioSesion, estadoCuenta, rolUsuario, avatar){
        this.id = id;
        this.username = nombreUsuario;
        this.email = email;
        this.password = password;
        this.edad = edad;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = genero;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ultimaFechaInicioSesion = ultimaFechaInicioSesion;
        this.estadoCuenta = estadoCuenta;
        this.rolUsuario = rolUsuario;
        this.avatar = avatar;
    }
    save(){
        new Promise ()aadb.run(`INSERT INTO usuarios (nombre, email, password, edad, fecha_nacimiento, genero, telefono, direccion, ultima_fecha_inicio_sesion, estado_cuenta, rol_usuario, avatar) VALUES ("${this.username}", "${this.email}", "${this.password}", ${this.edad}, "${this.fechaNacimiento}", "${this.genero}", "${this.telefono}", "${this.direccion}", "${this.ultimaFechaInicioSesion}", "${this.estadoCuenta}", "${this.rolUsuario}", "${this.avatar}")`, (err)=>{
            if(err){
                console.error(`Error al crear el usuario: ${err.message}`)
            };
        }
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