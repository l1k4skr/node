const Express = require("express");
const { Usuarios: User } = require("./models/user");
const cors = require("cors");

const server = new Express();
const PORT = 3000;

// Middleware
server.use(cors())
server.use(Express.json());

// Routes
//eslint-disable-next-line 
server.get("/", (req, res) => {
    console.log(`${req.ip} hizo una peticion a la ruta /`)
    res.send("Conectado al servidor.")
})

server.get("/usuarios", (req, res) => {
    console.log("Mostrando usuarios")
    User.mostrarUsuarios().then(usuarios => {
        res.send(usuarios)

    });
})

let userCounter = 0;
server.post("/crear_usuario", async (req, res) => {
    console.log("Creando usuario")
    
    userCounter++;
    console.log(userCounter)

    // Cross Origin Resource Sharing
    res.header("Access-Control-Allow-Origin", "*");
    
    const { username:name, email, password, edad, fechaNacimiento, genero, telefono, direccion, ultimaFechaInicioSesion, estadoCuenta, rolUsuario, avatar } = req.body;

    console.log(req.body)
    
    User.crearUsuario(name, email, password, edad, fechaNacimiento, genero, telefono, direccion, ultimaFechaInicioSesion, estadoCuenta, rolUsuario, avatar);
    
    res.send(`Usuario ${name} creado exitosamente`)
    console.log("Nuevo usuario creado")
})
// TODO: Reparar!
server.post("/eliminar_usuario", async (req, res) => {
    console.log("Eliminando usuario")
    console.log(req.body)
    
    const { id } = req.body;
    
    try {
        await User.eliminarUsuario(id); // Esperamos la eliminación del usuario
        res.send(`ID de Usuario ${id} eliminado exitosamente`); // Enviamos la respuesta con el nombre del usuario eliminado
        console.log(`ID de Usuario ${id} eliminado exitosamente`);
    } catch (error) {
        res.status(500).send("Error al eliminar el usuario");
        console.error("Error al eliminar el usuario:", error);
    }
});

server.post("/modificar_usuario", async (req, res) => {
    console.log(req.body)

    const { id, name: nombre, edad, email, password } = req.body;

    try {
        const usuarioActualizado = await User.actualizarUsuario(id, nombre, email, edad, password);
        res.send(`Usuario ${usuarioActualizado.email} actualizado exitosamente`);
        console.log("Usuario actualizado:", usuarioActualizado);
    } catch (error) {
        res.status(500).send("Error al actualizar el usuario");
        console.error("Error al actualizar el usuario:", error);
    }
});
// Start server
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
