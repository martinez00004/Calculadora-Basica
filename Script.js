function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Usar eval puede ser riesgoso, pero aqu� se usa en un contexto controlado
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}