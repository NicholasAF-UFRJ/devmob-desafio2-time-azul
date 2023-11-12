// JavaScript da Página Sistema de Numeração


const botaoConversorDecBin = document.querySelector(".sist_num-section2-button-converter-DecBin");

botaoConversorDecBin.addEventListener("click", function() {

    let valorInput1 = Number(document.querySelector(".sist_num-section2-input1-DecBin").value);
    let resultadoDecBin =  valorInput1.toString(2);
    let paragrafoConverterDecBin = document.querySelector(".sist_num-section2-paragrafo-DecBin");
    paragrafoConverterDecBin.textContent = "Resultado: " + resultadoDecBin; 

});

const botaoConversorBinDec = document.querySelector(".sist_num-section2-button-converter-BinDec");

botaoConversorBinDec.addEventListener("click", function() {

    let numProibido = ["2", "3", "4", "5", "6", "7", "8", "9"];


    let valorInput2 = document.querySelector(".sist_num-section2-input2-BinDec").value;
    let paragrafoConverterBinDec = document.querySelector(".sist_num-section2-paragrafo-BinDec");
    
    let contemNumeroProibido = numProibido.some(x => valorInput2.includes(x));
    
    if (contemNumeroProibido) {
        paragrafoConverterBinDec.textContent = "Resultado: Inválido! Contém número que não faz parte dos binários"; 
    } else {
        let resultadoBinDec =  parseInt(Number(valorInput2), 2);
        paragrafoConverterBinDec.textContent = "Resultado: " + resultadoBinDec; 
    }
    
})