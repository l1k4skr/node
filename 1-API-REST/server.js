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

server.post("/eliminar_usuario", async (req, res) => {
    console.log("Eliminando usuario")
    console.log(req.body)
    
    const { email } = req.body;
    
    User.eliminarUsuario(email);
    
    res.send(`Usuario ${email} eliminado exitosamente`)
    console.log("Usuario eliminado")
})

server.post("/modificar_usuario", async (req, res) => {
    console.log("Eliminando usuario")
    console.log(req.body)

    const {id, name: nombre, edad: edad, email: email, password } = req.body;

    User.actualizarUsuario(id,  nombre, email, edad, password);
    
    res.send(`Usuario ${email} actualizado exitosamente`);
    
    console.log("Usuario actualizado");
})

// Start server
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
