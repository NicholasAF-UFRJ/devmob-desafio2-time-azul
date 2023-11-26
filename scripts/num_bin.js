//================================
// Inputs
//================================
let txt2bin = true; // Controlador da função

const result = document.getElementById("result");
const input = document.getElementById("input");
input.addEventListener("input", text2binary);

const txtInput = document.getElementById("txt-input");
const txtResult = document.getElementById("txt-result");

const changeBtn = document.getElementById("change-icon");
changeBtn.addEventListener("click", () => {
  // Troca título
  let inputNode = txtInput.firstChild;
  let resultNode = txtResult.firstChild;

  txtResult.removeChild(txtResult.firstChild);
  txtInput.removeChild(txtInput.firstChild);

  txtInput.appendChild(resultNode);
  txtResult.appendChild(inputNode);

  // Trocar função de conversão
  const oldEvent = txt2bin ? text2binary : binary2text;
  txt2bin = !txt2bin;
  const newEvent = txt2bin ? text2binary : binary2text;
  input.removeEventListener("input", oldEvent);
  input.addEventListener("input", newEvent);

  // Troca valor input
  const aux = input.value;
  input.value = result.value;
  result.value = aux;
});

//================================
// Conversor
//================================

function text2binary(event) {
  const value = event.target.value;
  let bin = "";
  for (let i = 0; i < value.length; i++) {
    // Código ascii
    const asciiCode = value.charCodeAt(i);

    // Código binário
    let charBin = asciiCode.toString(2);

    // Garante que o resultado tenha 8 bits
    charBin = "0".repeat(8 - charBin.length) + charBin;

    // Concatena ao resultado final
    bin += charBin + " ";
  }
  result.value = bin;
}

function binary2text(event) {
  const value = event.target.value;
  let txt = "";

  // Separa os código binários por espaço
  const binaries = value.split(" ");
  if (binaries.length > 0) {
    binaries.map((bin) => {
      // Código ascii
      const asciiCode = parseInt(bin, 2);
      // string correspondente
      txt += String.fromCharCode(asciiCode);
    });

    result.value = txt;
  }
}
