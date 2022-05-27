const kelvinValue = document.querySelector(".kelvin > input");
const celciusValue = document.querySelector(".celcius > input");
const fahrenheitValue = document.querySelector(".fahrenheit > input");

function roundNum(num){
    return Math.round(num+ 100)
}


function convertFromCelsiusToKelvinToFahrenheit() {
    const celTempy = parseFloat(celciusValue.value)
    const kelTempy = celTempy + 273.15
    const fahTempy = (celTempy * (9 / 5)) + 32
    kelvinValue.value = roundNum(kelTempy)
    fahrenheitValue.value = roundNum(fahTempy)

}


function convertFromKelvinToCelciusToFahrenheit() {
    const kelTempy = parseFloat(kelvinValue.value)
    const celTempy = kelTempy - 273.15;
    const fahTempy = 9 / 5 * (kelTempy - 273) + 32;
    celciusValue.value = roundNum(celTempy);
    fahrenheitValue.value = roundNum(fahTempy);
}

function convertFromFahrenheitToCelciusToKelvin() {
    const fahTempy = parseFloat(fahrenheitValue.value)
    const celTempy = (fahTempy - 32) * (5/9);
    const kelTempy = (fahTempy + 459.67) * 5/9;
    celciusValue.value = roundNum(celTempy);
    kelvinValue.value = roundNum(kelTempy);
}




kelvinValue.addEventListener('input', convertFromKelvinToCelciusToFahrenheit)
celciusValue.addEventListener("input", convertFromCelsiusToKelvinToFahrenheit)
fahrenheitValue.addEventListener("input", convertFromFahrenheitToCelciusToKelvin)

