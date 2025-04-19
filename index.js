
//event loop
console.log('Inicio');

setTimeout(() => {
  console.log('Dentro del setTimeout');
}, 0);

console.log('Fin');

//callbacks
function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();
  }
  
  saludar('Lucas', () => {
    console.log('Esto se ejecuta después del saludo');
  });
  
//promises
function obtenerDatos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Datos obtenidos con éxito');
      }, 1000);
    });
  }
  
  obtenerDatos()
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));

//async/await
function obtenerUsuario() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ nombre: 'Ana', edad: 28 });
      }, 1000);
    });
  }
  
  async function mostrarUsuario() {
    const usuario = await obtenerUsuario();
    console.log(usuario);
  }
  
  mostrarUsuario();

//non-blocking I/O
const fs = require('fs');  //fs es un modulo de node para trabajar con archivos

console.log('Inicio lectura');

fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Contenido del archivo:', data);
});

console.log('Lectura iniciada (no bloquea)');
