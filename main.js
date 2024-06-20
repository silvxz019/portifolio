let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector ('#resultado');

function somar (){
    let final = Number(numero1.value) + Number(numero2.value);
    resultado.innerHTML = final;
    resultado.value = Number(numero1.value) + Number(numero2.value);
}

function subtrair(){
    let final = Number(numero1.value) - Number(numero2.value);
    resultado.innerHTML = final;
    resultado.value = Number(numero1.value) - Number(numero2.value);
}

function dividir(){
    let final = Number(numero1.value) / Number(numero2.value);
    resultado.innerHTML = final;
    resultado.value = Number(numero1.value) / Number(numero2.value);
}

function multiplicar(){
    let final = Number(numero1.value) * Number(numero2.value);
    resultado.innerHML = final;
    resultado.value = Number(numero1.value) * Number(numero2.value);
}

function imc(){
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');
    let resultadoIMC = Number(peso.value) / (Number(altura.value) * Number(altura.value));

    document.querySelector('#imcResultado').value = resultadoIMC.toFixed(2);


    // definir as consideraçoes baseadas no IMC calculado
    let consideracoes = document.getElementById('consideracoes');
    if (resultadoIMC < 18.5){
        consideracoes.textContent = 'Abaixo do peso';
    }else if ( resultadoIMC >= 18.5 && resultadoIMC <= 24.9){
     consideracoes.textContent = 'peso normal';
    }else if ( resultadoIMC >= 25.0 && resultadoIMC <= 29.9){
        consideracoes.textContent = 'sobre peso';
    }else if ( resultadoIMC >= 30.0 && resultadoIMC <= 34.9){
        consideracoes.textContent = 'Obesidade grau 1';
    }else if ( resultadoIMC >= 35.0 && resultadoIMC <= 39.9){
        consideracoes.textContent = 'obesidade grau 2';
    }else {
        consideracoes.textContent = 'Obesidade grau 3';
    }



}

