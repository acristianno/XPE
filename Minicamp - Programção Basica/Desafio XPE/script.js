//pegar os elementos do html via dom
const soma = document.getElementById('soma');
const raiz = document.getElementById('raiz');
const porcentagem = document.getElementById('porcentagem');

soma.innerHTML = 0;
raiz.innerHTML = 0;
porcentagem.innerHTML = 0;

// construir as funçoes com os calculos
function calcularSoma(a, b) {
  return a + b;
}

function calcularRaiz(a) {
  return Math.sqrt(a).toFixed(2);
}

function calcularporcentagem(a, b) {
  return `${((a * 100) / b).toFixed(0)}`;
}

// criar a função para fazer os calculos
function calcular() {
  const inputA = document.getElementById('primeiroNumero').value;
  const inputB = document.getElementById('segundoNumero').value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = calcularSoma(a, b);
  raiz.innerHTML = calcularRaiz(a);
  porcentagem.innerHTML = calcularporcentagem(a, b);
}
