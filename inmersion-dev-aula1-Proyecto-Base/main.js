let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789¿¡!?@#$%^&*()'


function generar(){

    let numeroDigitado = parseInt (cantidad.value);

    if (numeroDigitado < 9) {
        alert("La cantidad de caracteres debe ser mayor que 9");
    }
    let password = '';
    for(let i=0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres. length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;




    }

    contrasena.value  = password

    
    
}

const passwordInput = document.getElementById('password');
const clearPassword = document.getElementById('clearPassword');

clearPassword.addEventListener('click', function () {
    // Limpiar el contenido del campo de entrada
    passwordInput.value = '';
});



