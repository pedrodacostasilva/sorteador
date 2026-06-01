const input = document.querySelector("#input");
const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

button.addEventListener("click", () => {
  const num = input.value;
  const numeros = sorteador(num);

  if (num === 0 || num === "") {
    alert("Digite um número de 6 a 9 no campo.");
    return;
  }

  resultado.innerText = numeros.join(" - ");
});

function sorteador(num) {
  if (num < 6 || num > 9) {
    alert("Número digitado não está entre 6 e 9.");
    return [];
  }

  const numbers = [];

  while (numbers.length < num) {
    const randomNumber = Math.floor(Math.random() * 60) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}
