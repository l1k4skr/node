document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
        const response = await fetch('http://localhost:3000/crear_usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const json = await response.json();
            console.log(json);
        } else {
            console.error('Error');
        }
    } catch (error) {
        console.error('Error');
    }
});