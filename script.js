function mostrarMensaje(nombreMascota) {
    alert("¡Gracias por querer adoptar a " + nombreMascota + "! 🐶🐱");
}

function cambiarColorFondo() {
    let colores = ["#f2f2f2", "#ffebcd", "#e1bee7", "#bbdefb", "#c8e6c9"];
    let colorActual = document.body.style.backgroundColor;
    let nuevoColor = colores[Math.floor(Math.random() * colores.length)];

    while (nuevoColor === colorActual) {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    }

    document.body.style.backgroundColor = nuevoColor;
}
