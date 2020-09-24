let num1 = Number(prompt("Digite um numéro: "));
let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');

numeroTitulo.innerHTML = num1; //inner altera um elemento do html
texto.innerHTML = " "
texto.innerHTML += `<p>Raiz quadrada é ${num1 ** 0.5}</p>`;
texto.innerHTML += `<p> ${num1} É inteiro: ${Number.isInteger(num1)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num1)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num1)}</p>`;
texto.innerHTML += `<p>Arredondando para Cima: ${Math.ceil(num1)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num1.toFixed(2)}</p>`;