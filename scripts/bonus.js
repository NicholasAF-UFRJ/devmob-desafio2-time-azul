// JavaScript da Página Bônus

const botaoCalculadora = document.querySelector(".bonus-section1-button-calcular");

botaoCalculadora.addEventListener("click", function(){
    let valorInputNumero1 = Number(document.querySelector(".bonus-section1-input1").value);
    let valorInputNumero2 = Number(document.querySelector(".bonus-section1-input2").value);
    let resultadoOp = "";
    let selectOption = document.querySelector(".bonus-section1-select").value;

    switch (selectOption) {
        case "Somar":
            resultadoOp = valorInputNumero1 + valorInputNumero2;
            break;
        case "Subtrair":
            resultadoOp = valorInputNumero1 - valorInputNumero2;
            break;
        case "Multiplicar":
            resultadoOp = valorInputNumero1 * valorInputNumero2;
            break;
        case "Dividir":
            resultadoOp = valorInputNumero1 / valorInputNumero2;
            break;
        default:
            break;
    }

    if (!Number.isInteger(resultadoOp)) {
        resultadoBinario = checkNumber(resultadoOp);
    } else {
        resultadoBinario = resultadoOp.toString(2);
    }

    let paragrafo_resultadoDecimal = document.querySelector(".bonus-section1-resultadoDecimal");
    let paragrafo_resultadoBinario = document.querySelector(".bonus-section1-resultadoBinario");

    paragrafo_resultadoDecimal.textContent = "Resultado Decimal: " + resultadoOp;
    paragrafo_resultadoBinario.textContent = "Resultado Binário: " + resultadoBinario;

});

function checkNumber(resultadoOp) {

    let parteInteira = Math.floor(resultadoOp);
    let parteFracionaria = resultadoOp - parteInteira;

    let binarioParteInteira = parteInteira.toString(2);

    let binarioParteFracionaria = '';

    while (parteFracionaria > 0) {
        parteFracionaria *= 2;
        binarioParteFracionaria += Math.floor(parteFracionaria);
        parteFracionaria -= Math.floor(parteFracionaria);
    }

    let resultadoBinario = binarioParteInteira;
    if (binarioParteFracionaria !== '') {
        resultadoBinario += '.' + binarioParteFracionaria;
    }
    return resultadoBinario;
}