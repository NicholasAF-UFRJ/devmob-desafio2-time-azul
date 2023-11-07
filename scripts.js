// JavaScript da Página de Números Binários
 
const botaoConversorAsciiTextoBinario = document.querySelector(".num_bin-section2-button-texto_binario");

botaoConversorAsciiTextoBinario.addEventListener("click", function() {
    //Essa event listener lê o input do usuário e, ao clickar no botão, converte para binário 
    //seguindo o padrão ASCII

    let valorInputConversorAsciiTextoBinario = document.querySelector(".num_bin-section2-input-texto_binario").value;
    let resultadoBinario = "";

    for (let i = 0; i < valorInputConversorAsciiTextoBinario.length; i++) {
        const charCodigo = valorInputConversorAsciiTextoBinario.charCodeAt(i); // Obtém o valor ASCII do caractere
        const charBinario = charCodigo.toString(2); // Converte o valor ASCII para binário
        resultadoBinario += '0'.repeat(8 - charBinario.length) + charBinario; // Garante que o resultado tenha 8 bits
    }

    let resultadoBinarioEspaçado = adicionarEspaço(resultadoBinario, 8)

    let paragrafo_resultado = document.querySelector(".num_bin-section2-resultado-texto_binario");
    paragrafo_resultado.textContent = "Resultado: " + resultadoBinarioEspaçado;
});

function adicionarEspaço(texto, intervalo) {
    //Essa função adiciona espaços (sempre de 8) entre o código binário para maior legibilidade

    let resultado = '';
    for (let i = 0; i < texto.length; i += intervalo) {
        let fragmento = texto.substring(i, i + intervalo);
        resultado += fragmento + ' ';
    }
    return resultado;
}


const botaoConversorAsciiBinarioTexto = document.querySelector(".num_bin-section2-button-binario_texto");

botaoConversorAsciiBinarioTexto.addEventListener("click", function() {
    //Essa event listener lê o input do usuário e, ao clickar no botão, converte para texto seguindo o padrão ASCII

    let valorInputConversorAscii = document.querySelector(".num_bin-section2-input-binario_texto").value;

    let resultadoTexto = binaryAgent(valorInputConversorAscii)

    let paragrafo_resultado = document.querySelector(".num_bin-section2-resultado-binario_texto");
    paragrafo_resultado.textContent = "Resultado: " + resultadoTexto;

});

function binaryAgent(input) {
    //Essa função recebe um binário, corta os espaços e usa a função de parse int para converter para string
    //e retorna um inteiro na base especificada
    let Binario = input.split(" ");
    let resultado = [];
    
    for (i = 0; i < Binario.length; i++) {
        resultado.push(String.fromCharCode(parseInt(Binario[i], 2)));
      }
    return resultado.join("");
}