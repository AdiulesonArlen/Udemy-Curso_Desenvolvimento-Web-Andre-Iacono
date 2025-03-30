let idade = prompt("Digite a sua idade: ");
let possuiTitulo = prompt(
  "Você possui título de eleitor?\nDigite SIM caso tenha,\ncaso contrário, digite NÃO"
).toLocaleUpperCase();
let idadeMinima = 16;

if (idade >= idadeMinima && possuiTitulo == "SIM") {
  alert("Você já pode votar");
} else if (idade >= idadeMinima && possuiTitulo == "NÃO") {
  alert("Você precisa emitir o seu Título de Eleitor");
} else if (idade < idadeMinima || possuiTitulo == "NÃO") {
  alert("Você ainda não tem idade para votar.");
} else {
  alert(
    "Você digitou alguma informação inválida!\n\nRecarregue e página e tente novamente."
  );
}
