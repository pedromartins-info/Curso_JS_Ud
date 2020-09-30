const form =  document.querySelector('#formulario') // selecionar/captirar o formulário formulário

form.addEventListener('submit',function(e) { // escutadir de eventos
e.preventDefault(); //parar o envio do formulário // captura evento
const inputPeso = e.target.querySelector('#peso'); //captura os valores do imput
const inputAltura = e.target.querySelector('#altura');

const peso = Number(inputPeso.value); // converteu valores do input
const altura = Number(inputAltura.value);

if (!peso){
    setResultado('Peso Inválido', false) //testou os valores
    return
}
if (!altura){
    setResultado('Altura Inválida', false)
    return
}

const imc = getImc(peso, altura); //calculo dos valores imc
const nivelImc = getNivelImc(imc); //nivel IMC da msg

const msg = `Seu IMC é: ${imc} (${nivelImc}.)`;
setResultado(msg,true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
      'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }
  
function getImc(peso, altura){  //funcao de calculo do imc
    const imc = peso/altura ** 2;
    return imc.toFixed(2);
}

function criaP(){ // funcao para criar um paragrafo
    const p = document.createElement('p');
    return p;
}
function setResultado(msg, isValid){ // funcao para setar o resultado
    const resultado = document.querySelector('#resultado'); // função para colocar um hml dentro da div resultado
    resultado.innerHTML = '';

    const p = criaP();
    
    if (isValid){
        p.classList.add ('paragrafo-resultado'); // verificacao do valor para criar classe de cores 
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg; //inner do pagrafo
    resultado.appendChild(p); // adc o paragrafo no resultado
};