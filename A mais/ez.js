const numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 4) + 1;
}