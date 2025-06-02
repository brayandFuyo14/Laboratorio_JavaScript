function verificarPalindromo() {
    const texto = document.getElementById('input-palindromo').value.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const resultado = texto === texto.split('').reverse().join('');
    document.getElementById('resultado-palindromo').textContent = resultado ? "Es un palíndromo" : "No es un palíndromo";
}

function compararNumeros() {
    const n1 = Number(document.getElementById('num1').value);
    const n2 = Number(document.getElementById('num2').value);
    let resultado = "";
    if (n1 > n2) resultado = `El número mayor es ${n1}`;
    else if (n2 > n1) resultado = `El número mayor es ${n2}`;
    else resultado = "Ambos números son iguales";
    document.getElementById('resultado-mayor').textContent = resultado;
}

function mostrarVocales() {
    const frase = document.getElementById('input-frase').value;
    const vocales = frase.match(/[aeiouáéíóú]/gi);
    document.getElementById('vocales').textContent = vocales ? [...new Set(vocales)].join(", ") : "No se encontraron vocales.";
}

function contarVocales() {
    const frase = document.getElementById('input-frase').value.toLowerCase();
    const conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let letra of frase) {
        if (conteo.hasOwnProperty(letra)) {
            conteo[letra]++;
        }
    }
    document.getElementById('conteo-vocales').textContent = JSON.stringify(conteo);
}