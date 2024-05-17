// Función para calcular el factorial de un número
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

// Función para solicitar un número al usuario y calcular su factorial
function calcularFactorialUsuario() {
    let input = prompt("Por favor, ingresa un número para calcular su factorial:");
    let numero = parseFloat(input);

    // Verificar si el dato de entrada es un número
    while (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        input = prompt("Por favor, ingresa un número para calcular su factorial:");
        numero = parseFloat(input);
    }

    // Calcular el factorial del número
    let factorial = calcularFactorial(numero);

    // Imprimir el resultado por el DOM
    document.getElementById("resultado").innerHTML = "El factorial de " + numero + " es: " + factorial;
}

// Llamar a la función cuando se cargue la página
window.onload = function() {
    calcularFactorialUsuario();
};