// Function to show the selected tab and hide others
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
}

// Function to convert length
function convertLength() {
    const value = parseFloat(document.getElementById('length-value').value);
    const unit = document.getElementById('length-unit').value;
    if (isNaN(value)) {
        document.getElementById('length-results').innerHTML = "Please enter a valid number.";
        return;
    }

    const conversions = {
        cm: value,
        mm: value * 10,
        m: value / 100,
        km: value / 100000,
        in: value / 2.54,
        ft: value / 30.48,
    };

    document.getElementById('length-results').innerHTML = `
        <div><strong>Millimeters:</strong> ${conversions.mm.toFixed(6)}</div>
        <div><strong>Meters:</strong> ${conversions.m.toFixed(6)}</div>
        <div><strong>Kilometers:</strong> ${conversions.km.toFixed(6)}</div>
        <div><strong>Inches:</strong> ${conversions.in.toFixed(6)}</div>
        <div><strong>Feet:</strong> ${conversions.ft.toFixed(6)}</div>
    `;
}

// Function to convert weight
function convertWeight() {
    const value = parseFloat(document.getElementById('weight-value').value);
    const unit = document.getElementById('weight-unit').value;
    if (isNaN(value)) {
        document.getElementById('weight-results').innerHTML = "Please enter a valid number.";
        return;
    }

    let conversions = {};
    switch (unit) {
        case "g":
            conversions = {
                "Miligram (mg)": value * 1000,
                "Centigram (cg)": value * 100,
                "Kilogram (kg)": value / 1000
            };
            break;
        case "kg":
            conversions = {
                "Gram (g)": value * 1000,
                "Miligram (mg)": value * 1000000,
                "Centigram (cg)": value * 100000
            };
            break;
        case "mg":
            conversions = {
                "Gram (g)": value / 1000,
                "Centigram (cg)": value / 10,
                "Kilogram (kg)": value / 1000000
            };
            break;
        case "cg":
            conversions = {
                "Gram (g)": value / 100,
                "Miligram (mg)": value * 10,
                "Kilogram (kg)": value / 100000
            };
            break;
        default:
            conversions = {};
    }

    document.getElementById('weight-results').innerHTML = Object.entries(conversions)
        .map(([key, val]) => `<div><strong>${key}:</strong> ${val.toFixed(2)}</div>`)
        .join('');
}


// Function to convert temperature
function convertTemperature() {
    const value = parseFloat(document.getElementById('temp-value').value);
    const unit = document.getElementById('temp-unit').value;
    if (isNaN(value)) {
        document.getElementById('temperature-results').innerHTML = "Please enter a valid number.";
        return;
    }

    let conversions = {};
    switch (unit) {
        case "c":
            conversions = { Fahrenheit: (value * 9) / 5 + 32, Kelvin: value + 273.15 };
            break;
        case "f":
            conversions = { Celsius: (value - 32) * 5 / 9, Kelvin: ((value - 32) * 5) / 9 + 273.15 };
            break;
        case "k":
            conversions = { Celsius: value - 273.15, Fahrenheit: ((value - 273.15) * 9) / 5 + 32 };
            break;
    }

    document.getElementById('temperature-results').innerHTML = Object.entries(conversions)
        .map(([key, val]) => `<div><strong>${key}:</strong> ${val.toFixed(2)}</div>`)
        .join('');
}

// Function to convert speed
function convertSpeed() {
    const value = parseFloat(document.getElementById('speed-value').value);
    const unit = document.getElementById('speed-unit').value;
    if (isNaN(value)) {
        document.getElementById('speed-results').innerHTML = "Please enter a valid number.";
        return;
    }

    let conversions = {};
    switch (unit) {
        case "mps":
            conversions = { "Kilometers/hour": value * 3.6, "Miles/hour": value * 2.237, "Feet/second": value * 3.281 };
            break;
        case "kmph":
            conversions = { "Meters/second": value / 3.6, "Miles/hour": value / 1.609, "Feet/second": value / 1.097 };
            break;
        case "mph":
            conversions = { "Meters/second": value / 2.237, "Kilometers/hour": value * 1.609, "Feet/second": value * 1.467 };
            break;
        case "fps":
            conversions = { "Meters/second": value / 3.281, "Kilometers/hour": value * 1.097, "Miles/hour": value / 1.467 };
            break;
    }

    document.getElementById('speed-results').innerHTML = Object.entries(conversions)
        .map(([key, val]) => `<div><strong>${key}:</strong> ${val.toFixed(2)}</div>`)
        .join('');
}
