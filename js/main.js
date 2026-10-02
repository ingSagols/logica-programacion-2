// Traemos los elementos del HTML por su id.
const inputCelsius = document.getElementById("celsius");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

// Declaramos el evento del click.
boton.addEventListener("click", () => {

    // Se lee el input y con Number() se pasa a numero.
    const celsius = Number(inputCelsius.value);

    // Convertimos Celsius a Fahrenheit y redondeamos a 2 decimales.
    const fahrenheit = (celsius * (9 / 5) + 32).toFixed(2);

    // Convertimos Celsius a Kelvin y redondeamos a 2 decimales.
    const kelvin = (celsius + 273.15).toFixed(2);

    // Mostramos el resultado.
    resultado.textContent = `${celsius} °C equivalen a ${fahrenheit} °F y ${kelvin} K.`;

    // Limpiamos el input para un nuevo calculo.
    inputCelsius.value = "";
});