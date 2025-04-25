let colorList = [];

for (let i = 0; i <= 2; i++) {
  colorList[i] = prompt("Digite a cor " + (i + 1) + ": ");
}

document.getElementById("lista-cores").innerHTML = colorList;

// alert("Sua lista de cores: " + colorList);
