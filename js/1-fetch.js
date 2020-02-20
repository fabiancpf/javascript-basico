'use strict';

//peticiones a servicios - apis rest

var div_usuarios = document.querySelector('#usuarios');
var usuarios = [];

fetch('https://reqres.in/api/users')
	.then((data) => data.json())
	.then((users) => {
		usuarios = users.data;
		console.log(usuarios);

		usuarios.forEach((user, i) => {
			let nombre = document.createElement('h3');

			nombre.innerHTML = i + '. ' + user.firt_name + ' ' + user.last_name;

			div_usuarios.appendChild(nombre);

			document.querySelector('.loading').style.display = 'none';
		});
	});
