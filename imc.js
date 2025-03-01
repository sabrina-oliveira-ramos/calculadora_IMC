/*A constante ... irá no documento e fará um get no Eleemento com id:...*/
const calcular = document.getElementById('calcular');

/* value. -> acessa o elemento */

function imc (){
/*No documento pega um eleemento com id ... e pega atributo valor*/
    const nome = document.getElementById('nome').value; 
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    /**verifica se os campos estão preenchidos */
    if(nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);
        
        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal.';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!'
        }
        
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{  
        resultado.textContent = 'Preencha todos os campos!'
    }

    }
/* Ao clicar no botão ele aciona a função imc */
calcular.addEventListener('click', imc);