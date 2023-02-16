//pegar os elementos do html via dom
const soma = document.getElementById('soma');
const subtracaoab = document.getElementById('subtracaoab');
const subtracaoba = document.getElementById('subtracaoba');
const multiplicacao = document.getElementById('multiplicacao');
const divisaoab = document.getElementById('divisaoab');
const divisaoba = document.getElementById('divisaoba');
const potenciaab = document.getElementById('potenciaab');
const potenciaba = document.getElementById('potenciaba');
const raiza = document.getElementById('raiza');
const raizb = document.getElementById('raizb');
const fatoriala = document.getElementById('fatoriala');
const fatorialb = document.getElementById('fatorialb');
const porcentagemab = document.getElementById('porcentagemab');
const porcentagemba = document.getElementById('porcentagemba');
const media = document.getElementById('media');

soma.innerHTML = 0;
subtracaoab.innerHTML = 0;
subtracaoba.innerHTML = 0;
multiplicacao.innerHTML = 0;
divisaoab.innerHTML = 0;
divisaoba.innerHTML = 0;
potenciaab.innerHTML = 0;
potenciaba.innerHTML = 0;
raiza.innerHTML = 0;
raizb.innerHTML = 0;
fatoriala.innerHTML = 0;
fatorialb.innerHTML = 0;
porcentagemab.innerHTML = 0;
porcentagemba.innerHTML = 0;
media.innerHTML = 0;

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
  return (a / b).toFixed(2);
}

function calculardivisaoba(a, b) {
  return (b / a).toFixed(2);
}

function calcularpotenciaab(a, b) {
  return Math.pow(a, b);
}

function calcularpotenciaba(a, b) {
  return Math.pow(b, a);
}

function calcularraiz(n) {
  return Math.sqrt(n).toFixed(2);
}

function calcularfatorial(n) {
  if (n === 0 || n === 1) return 1;
  for (var i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

function calcularporcentagem(a, b) {
  return `${((a * 100) / b).toFixed(0)}%`;
}

function calcularmedia(a, b) {
  return (a + b) / 2;
}

// criar a função para fazer os calculos
function calcular() {
  const inputA = document.getElementById('primeiroNumero').value;
  const inputB = document.getElementById('segundoNumero').value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = calcularSoma(a, b);
  subtracaoab.innerHTML = calcularsubtracaoab(a, b);
  subtracaoba.innerHTML = calcularsubtracaoba(a, b);
  multiplicacao.innerHTML = calcularmultiplicacao(a, b);
  divisaoab.innerHTML = calculardivisaoab(a, b);
  divisaoba.innerHTML = calculardivisaoba(a, b);
  potenciaab.innerHTML = calcularpotenciaab(a, b);
  potenciaba.innerHTML = calcularpotenciaba(a, b);
  raiza.innerHTML = calcularraiz(a);
  raizb.innerHTML = calcularraiz(b);
  fatoriala.innerHTML = calcularfatorial(a);
  fatorialb.innerHTML = calcularfatorial(b);
  porcentagemab.innerHTML = calcularporcentagem(a, b);
  porcentagemba.innerHTML = calcularporcentagem(b, a);
  media.innerHTML = calcularmedia(a, b);
}
