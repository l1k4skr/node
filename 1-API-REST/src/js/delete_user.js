
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch('http://localhost:3000/eliminar_usuario', {
        method: '',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            return response.json();  // Convertimos la respuesta a JSON y la pasamos a la siguiente cadena de promesas.
        } else {
            // Si el servidor responde con un código de error, lanzamos un error para que pueda ser capturado por .catch()
            throw new Error('La solicitud no fue exitosa: ' + response.statusText);
        }
    })
    .then(json => {
        // Manejamos la respuesta convertida a JSON aquí.
        console.log('Respuesta:', json);
    })
    .catch((error) => {
        // Cualquier error en la solicitud o en el procesamiento de la respuesta terminará aquí.
        console.error('Error:', error);
    });
}