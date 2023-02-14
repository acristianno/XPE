//pegar os elementos do html via dom
const soma = document.getElementById('soma');
const raiz = document.getElementById('raiz');
const porcentagem = document.getElementById('porcentagem');
const subtracaoab = document.getElementById('subtracaoab');
const subtracaoba = document.getElementById('subtracaoba');
const multiplicacao = document.getElementById('multiplicacao');
const divisaoab = document.getElementById('divisaoab');
const divisaoba = document.getElementById('divisaoba');

soma.innerHTML = 0;
raiz.innerHTML = 0;
porcentagem.innerHTML = 0;
subtracaoab.innerHTML = 0;
subtracaoba.innerHTML = 0;
multiplicacao.innerHTML = 0;
divisaoab.innerHTML = 0;
divisaoba.innerHTML = 0;

// construir as funçoes com os calculos
function calcularSoma(a, b) {
  return a + b;
}

function calcularsubtracaoab(a, b) {
  return a - b;
}

function calcularsubtracaoba(a, b) {
  return b - a;
}

function calcularmultiplicacao(a, b) {
  return a * b;
}

function calculardivisaoab(a, b) {
  return a/b;
}

function calculardivisaoba(a, b) {
  return b/a;
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
  subtracaoab.innerHTML = calcularsubtracaoab(a, b);
  subtracaoba.innerHTML = calcularsubtracaoba(a, b);
  multiplicacao.innerHTML = calcularmultiplicacao(a, b);
  divisaoab.innerHTML = calculardivisaoab(a, b);
  divisaoba.innerHTML = calculardivisaoba(a, b);
}
