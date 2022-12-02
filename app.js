// Definir la variable en el segundo que debe empezar
var segundoInicio = 10;

function actualizar() {
    document.getElementById('countdown').innerHTML = segundoInicio;

    if (segundoInicio == 0) {
        // Cuenta regresiva ha finalizado
        window.alert("¿Este es el trabajo?");
        document.getElementById('countdown').innerHTML = "Presnto mi trabajo (mejor tarde que nunca jeje).";
    } else {
        segundoInicio-=1;
        setTimeout(actualizar, 1E3);
    }
}

actualizar();
