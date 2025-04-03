let valorConta = 0;
let gorjeta = 0;
let valorTotal = 0;

valorConta = parseFloat(prompt("Digite o valor da conta: "));
gorjeta = parseFloat(prompt("Digite a gorjeta (%): "));
alert(`Porcentagem da gorjeta: ${gorjeta}%`)
valorTotal += valorConta;
gorjeta = (valorTotal * gorjeta) / 100
valorTotal += gorjeta;

alert(`R$${gorjeta}`)

alert("O valor total a ser pago será: R$" + valorTotal)