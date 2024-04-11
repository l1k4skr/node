const Express = require("express");
const { Usuarios:User } = require("./models/user");
const cors = require("cors");

const server = new Express();
const PORT = 3000;

// Middleware
server.use(cors())
server.use(Express.json());

// Routes
//eslint-disable-next-line 
server.get("/", (req, res)=>{
    req.send("Conectado al servidor.")
})

server.get("/usuarios", (req, res)=>{
    User.mostrarUsuarios().then(usuarios=>{
        res.send(usuarios)
    
    });
})

let counter = 0;
server.post("/crear_usuario", async (req, res)=>{
    console.log("Creando usuario")
    counter++;
    console.log(counter)
    // Cross Origin Resource Sharing
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    const {name:nombre, edad:edad, email:email} = req.body;
     User.crearUsuario(nombre, email, edad);
    res.send(`Usuario ${nombre} creado exitosamente`)
    console.log("Nuevo usuario creado")
})

server.post("/eliminar_usuario")
server.post("/modificar_usuario")

// Start server
server.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
