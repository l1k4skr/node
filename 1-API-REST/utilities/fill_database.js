// TODO: Fill the database with some users
// TODO: Run this script with node utilities/fill_database.js


/* eslint-disable no-unused-vars */
const USER = require('../models/user')

const users = [
    {
        id: 1,
        username: "usuario1",
        email: "usuario1@example.com",
        password: "contraseña1",
        edad: 25,
        fechaNacimiento: "1999-03-15",
        genero: "masculino",
        telefono: "+1234567890",
        direccion: "Calle 123, Ciudad",
        ultimaFechaInicioSesion: "2024-04-12T15:30:00Z",
        estadoCuenta: "activo",
        rolUsuario: "usuario",
        avatar: "avatar1.jpg"
    },
    {
        id: 2,
        username: "usuario2",
        email: "usuario2@example.com",
        password: "contraseña2",
        edad: 30,
        fechaNacimiento: "1994-08-20",
        genero: "femenino",
        telefono: "+1987654321",
        direccion: "Avenida Principal 456, Ciudad",
        ultimaFechaInicioSesion: "2024-04-11T12:45:00Z",
        estadoCuenta: "activo",
        rolUsuario: "admin",
        avatar: "avatar2.jpg"
    },
    {
        id: 3,
        username: "usuario3",
        email: "usuario3@example.com",
        password: "contraseña3",
        edad: 22,
        fechaNacimiento: "1999-10-05",
        genero: "no binario",
        telefono: "+1122334455",
        direccion: "Calle Secundaria 789, Ciudad",
        ultimaFechaInicioSesion: "2024-04-10T09:15:00Z",
        estadoCuenta: "inactivo",
        rolUsuario: "usuario",
        avatar: "avatar3.jpg"
    },
    {
        id: 4,
        username: "usuario4",
        email: "usuario4@example.com",
        password: "contraseña4",
        edad: 35,
        fechaNacimiento: "1989-12-10",
        genero: "masculino",
        telefono: "+4433221100",
        direccion: "Calle Principal 987, Ciudad",
        ultimaFechaInicioSesion: "2024-04-09T18:20:00Z",
        estadoCuenta: "activo",
        rolUsuario: "usuario",
        avatar: "avatar4.jpg"
    },
    {
        id: 5,
        username: "usuario5",
        email: "usuario5@example.com",
        password: "contraseña5",
        edad: 28,
        fechaNacimiento: "1996-05-25",
        genero: "femenino",
        telefono: "+1122334455",
        direccion: "Avenida Central 789, Ciudad",
        ultimaFechaInicioSesion: "2024-04-08T14:55:00Z",
        estadoCuenta: "activo",
        rolUsuario: "admin",
        avatar: "avatar5.jpg"
    },
    {
        id: 6,
        username: "usuario6",
        email: "usuario6@example.com",
        password: "contraseña6",
        edad: 33,
        fechaNacimiento: "1991-11-30",
        genero: "masculino",
        telefono: "+9988776655",
        direccion: "Calle Principal 123, Ciudad",
        ultimaFechaInicioSesion: "2024-04-07T10:10:00Z",
        estadoCuenta: "activo",
        rolUsuario: "usuario",
        avatar: "avatar6.jpg"
    }

]
/* eslint-enable no-unused-vars */
