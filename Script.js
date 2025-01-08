let lastInputWasOperator = false;

function appendToDisplay(value) {
    const display = document.getElementById('display');

    // Verifica si el último input fue un operador
    if (lastInputWasOperator && isOperator(value)) {
        return; // No permite agregar otro operador
    }

    display.value += value;
    lastInputWasOperator = isOperator(value);
}

function isOperator(value) {
    return value === '+' || value === '-' || value === '*' || value === '/';
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    lastInputWasOperator = false; // Reinicia el estado
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    lastInputWasOperator = isOperator(display.value.charAt(display.value.length - 1)); // Actualiza el estado
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Calcula el resultado
        lastInputWasOperator = false; // Reinicia el estado después de calcular
    } catch (error) {
        display.value = 'Error'; // Manejo de errores
    }
}