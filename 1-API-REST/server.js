const Express = require("express");
const User = require("./models/user");

const server = new Express();
const PORT = 3000;

server.get("/", (res, req)=>{
    req.send("Primer servidor hecho a mano")
})
server.get("/usuarios", (res, req)=>{
    db.all("SELECT * FROM usuarios", (err, rows)=>{
        if(err){
            console.error(`Error al hacer la consulta: ${err.message}`)
        }
        req.json(rows)
    })
})

server.post("/crear_usuario", (res, req)=>{
    const {nombre, edad, email} = res.body;
    User.crearUsuario(nombre, email, edad);
    req.send(`Usuario ${nombre} creado exitosamente`)
    
})
server.post("/eliminar_usuario")
server.post("/modificar_usuario")


server.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
