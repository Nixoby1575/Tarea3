const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const cedula = document.getElementById('cedula').value;
	const correo = document.getElementById('correo').value;
	const contraseña = document.getElementById('contraseña').value;
	
	// Validar los campos
	if (nombres.trim() === '') {
		alert('El nombre es obligatorio');
		return;
	}
	
    if (apellidos.trim() === '') {
		alert('El Apellido es obligatorio');
		return;
	}

    if (cedula.trim() === '') {
		alert('La Cédula es obligatoria');
		return;
	}

	if (correo.trim() === '') {
		alert('El correo electrónico es obligatorio');
		return;
	}
	
	if (contraseña.trim() === '') {
		alert('La contraseña es obligatoria');
		return;
	}
	
	// Enviar los datos al servidor (o hacer lo que sea necesario)
	alert('Registro exitoso');
});
