document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelector = document.getElementById("unitSelector");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const selectedUnit = unitSelector.value;

        if (isNaN(temperature)) {
            result.textContent = "Please enter a valid number.";
            return;
        }

        let convertedTemperature;
        let resultUnit;

        if (selectedUnit === "celsius") {
            convertedTemperature = (temperature - 32) * (5 / 9);
            resultUnit = "Celsius";
        } else if (selectedUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
            resultUnit = "Fahrenheit";
        } else if (selectedUnit === "kelvin") {
            convertedTemperature = temperature + 273.15;
            resultUnit = "Kelvin";
        }

        result.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
    });
});
