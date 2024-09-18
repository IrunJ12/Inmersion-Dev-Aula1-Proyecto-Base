let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let limpiar = document.getElementById('limpiar');
let labelEstado = document.getElementById('password-strength-label');
let progressBarContainer = document.getElementById('password-strength');
let containerProgress = document.getElementById('progess-bar')

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

function limpiar_contrasena(){
    
    contrasena.value = '';
    


}


function evaluarFortaleza(password){
    const length = password.length;
    const hasAlpha = isAlpha(password);
    const hasDigit = isDigit(password);
    const hasSpecial = isSpecialCharacter(password);

    if (length >= 9 && length <= 10){
        if ((hasAlpha && !hasDigit && !hasSpecial) || (!hasAlpha && hasDigit && !hasSpecial)){
            return 'weak';
        } else {
            return 'medium';
        }
        
    } else if (length >= 11 && length <= 12){
        if ((hasAlpha && hasDigit && !hasSpecial) || (hasAlpha && hasSpecial && !hasDigit) || (hasDigit && hasSpecial && !hasAlpha)){
            return 'medium';
        } else if (hasAlpha, hasDigit, hasSpecial){
            return 'strong';
        } else {
            return 'weak';
        }
    } else if (length > 11){
        if (hasAlpha && hasDigit && hasSpecial){
            return 'strong';
        } else if ((hasAlpha && hasDigit && !hasSpecial) || (hasAlpha && hasSpecial && !hasDigit) || (hasDigit && hasSpecial & !hasAlpha)){
            return 'meidum';
        } else {
            return 'weak';
        }
    }

    return 'weak';

}

function actualizarUI(strength){
    progressBarContainer.style.display = 'block';
    switch (strength){
        case 'weak':
            labelEstado.textContent = 'Contraseña Débil';
            containerProgress.className = 'weak';
            containerProgress.style.display = '33%';
            break;
        case 'medium':
            labelEstado.textContent = 'Contraseña Media';
            containerProgress.className = 'medium';
            containerProgress.style.display = '66%';
            break;
        case 'strong':
            labelEstado.textContent = 'Contraseña Fuerte';
            containerProgress.className = 'strong';
            containerProgress.style.display = '100%';
            break;
    }
}