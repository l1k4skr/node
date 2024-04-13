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
    constructor(id, nombreUsuario, email, password, edad, fechaNacimiento, genero, telefono, direccion, ultimaFechaInicioSesion, estadoCuenta, rolUsuario, avatar) {
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

    save() {
        db.run(`INSERT INTO usuarios (nombre, email, edad, fechaNacimiento, genero, telefono, direccion, ultimaFechaInicioSesion, estadoCuenta, rolUsuario, avatar) VALUES ("${this.username}", "${this.email}", ${this.edad}, "${this.fechaNacimiento}", "${this.genero}", "${this.telefono}", "${this.direccion}", "${this.ultimaFechaInicioSesion}", "${this.estadoCuenta}", "${this.rolUsuario}", "${this.avatar}")`, (err) => {
            if (err) {
                console.error(`Error al crear el usuario: ${err.message}`)
            };
        });
    }

    static checkPassword(email, password) {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM usuarios WHERE email = "${email}" AND password = "${password}"`, (err, row) => {
                if (err) {
                    console.error(`Error al buscar el usuario: ${err.message}`)
                    reject(err);
                } else {
                    resolve(row)
                }
            });
        })
    }

    static deleteAllUsers() {
        db.run(`DELETE FROM usuarios`, (err) => {
            if (err) {
                console.error(`Error al eliminar los usuarios: ${err.message}`)
            };
        });
    }

    // Metodo para mostrar un usuario
    static mostrarUsuarios() {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM usuarios", (err, rows) => {
                if (err) {
                    console.error(`Error al mostrar los usuarios: ${err.message}`)
                    reject(err);
                } else {
                    resolve(rows)
                }
            });
        })
    }

    // Método para crear un usuario
    static crearUsuario(nombre, email, password, edad, fechaNacimiento, genero, telefono, direccion, ultimaFechaInicioSesion, estadoCuenta, rolUsuario, avatar) {
        const sql = `INSERT INTO usuarios (nombre, email, password, edad, fechaNacimiento, genero, telefono, direccion, ultimaFechaInicioSesion, estadoCuenta, rolUsuario, avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [nombre, email, password, edad, fechaNacimiento, genero, telefono, direccion, ultimaFechaInicioSesion, estadoCuenta, rolUsuario, avatar];

        db.run(sql, values, (err) => {
            if (err) {
                console.error(`Error al crear el usuario: ${err.message}`);
            } else {
                console.log('Usuario creado correctamente.');
            }
        });
    }

    // Método para eliminar un usuario
    static async eliminarUsuario(id) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.get(`SELECT * FROM usuarios WHERE id = ${id}`, (err, row) => {
                    if (err) {
                        console.error(`Error al buscar el usuario: ${err.message}`);
                        reject(err);
                    } else {
                        db.run(`DELETE FROM usuarios WHERE id = ${id}`, (err) => {
                            if (err) {
                                console.error(`Error al eliminar el usuario: ${err.message}`);
                                reject(err);
                            } else {
                                resolve(row); // Devolvemos el usuario eliminado
                            }
                        });
                    }
                });
            });
        });
    }
    static async actualizarUsuario(id, nombre, email, edad, password) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.run(`UPDATE usuarios SET nombre = ?, email = ?, edad = ?, password = ? WHERE id = ?`, [nombre, email, edad, password, id], function (err) {
                    if (err) {
                        console.error(`Error al actualizar el usuario: ${err.message}`);
                        reject(err);
                    } else {
                        db.get(`SELECT * FROM usuarios WHERE id = ${id}`, (err, row) => {
                            if (err) {
                                console.error(`Error al obtener el usuario actualizado: ${err.message}`);
                                reject(err);
                            } else {
                                resolve(row); // Devolvemos el usuario actualizado
                            }
                        });
                    }
                });
            });
        });
    }
}

exports.Usuarios = Usuarios;