document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sumaForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const num1 = parseFloat(document.getElementById('numero1').value);
        const num2 = parseFloat(document.getElementById('numero2').value);
        const resultado = sumar(num1, num2);
        document.getElementById('resultado').textContent = `El resultado es: ${resultado}`;
    });
});

function sumar(a, b) {
    return a + b;
}