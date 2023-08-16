function mostrarTexto(texto) {
  document.getElementById("resultado").innerHTML += texto;
}

function executar(ev) {
  ev.preventDefault();
  var resultado = "<table><tr>";

  for (var i = 1; i <= 100; i = i + 1) {
    resultado = resultado + "<td>";
    for (var j = 0; j <= 10; j = j + 1) {
      var multiplicacao = i * j;
      var linha = "" + i + "x" + j + "=" + multiplicacao + "<br>";
      resultado = resultado + linha;
    }
    resultado = resultado + "</td>";
    if (i % 5 === 0) {
      resultado = resultado + "<tr></tr>";
    }
  }
  resultado = resultado + "</tr></table>";
  mostrarTexto(resultado);
}

const valor1 = prompt("Adicione um valor");
const valor2 = prompt("Adicione um outro valor");

valorFinal = valor1 * valor2;

alert(`${valorFinal}`);

function maiorNumero(num1, num2, num3) {
  const num1 = prompt("Adicione o primeiro número");
  const num2 = prompt("Adicione o segundo número");
  const num3 = prompt("Adicione o terceiro número");

  const maior = Math.max(num1, num2, num3);

  alert(`O maior número é: ${maior}`);
}

function menorNumero(num1, num2, num3) {
  const num1 = prompt("Adicione o primeiro número");
  const num2 = prompt("Adicione o segundo número");
  const num3 = prompt("Adicione o terceiro número");

  const menor = Math.min(num1, num2, num3);

  alert(`O menor número é: ${menor}`);
}

const multNumber = () => {};
