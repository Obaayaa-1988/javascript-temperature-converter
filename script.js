const kelvinValue = document.querySelector(".kelvin > input");
const celciusValue = document.querySelector(".celcius > input");
const fahrenheitValue = document.querySelector(".fahrenheit > input");


function convertFromCelsiusToKelvinToFahrenheit() {
    const celTempy = celciusValue.value
    const kelTempy = celTempy + 273.15
    const fahTempy = (celTempy * (9 / 5)) + 32
    kelvinValue.value = kelTempy
    fahrenheitValue.value = fahTempy

}


function convertFromKelvinToCelciusToFahrenheit() {
    const kelTempy = kelvinValue.value
    const celTempy = kelTempy - 273.15;
    const fahTempy = 9 / 5 * (kelTempy - 273) + 32;
    celciusValue.value = celTempy;
    fahrenheitValue.value = fahTempy;
}

function convertFromFahrenheitToCelciusToKelvin() {
    const fahTempy = fahrenheitValue.value
    const celTempy = (fahTempy - 32) * (5/9);
    const kelTempy = (fahTempy + 459.67) * 5/9;
    celciusValue.value = celTempy;
    kelvinValue.value = kelTempy
}




kelvinValue.addEventListener('input', convertFromKelvinToCelciusToFahrenheit)
celciusValue.addEventListener("input", convertFromCelsiusToKelvinToFahrenheit)
fahrenheitValue.addEventListener("input", convertFromFahrenheitToCelciusToKelvin)

