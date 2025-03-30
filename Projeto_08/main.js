let pontuacao = prompt("Digite a sua pontuação: ");

if (pontuacao >= 90 && pontuacao <= 100) {
  alert("Sua nota conceitual é: A");
} else if (pontuacao >= 80 && pontuacao <= 89) {
  alert("Sua nota conceitual é: B")
} else if (pontuacao >= 70 && pontuacao <= 79) {
  alert("Sua nota conceitual é: C")
} else if (pontuacao >= 60 && pontuacao <= 69) {
  alert("Sua nota conceitual é: D")
} else if (pontuacao < 60) {
  alert("Sua nota conceitual é: F")
} else {
  alert("PONTUAÇÃO INVÁLIDA!")
}