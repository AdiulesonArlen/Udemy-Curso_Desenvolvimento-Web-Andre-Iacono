function formatarMensagem(textoEntrada) {
  if (textoEntrada == undefined) {
    return "...";
  }

  let data = new Date();

  let hora = data.getHours();
  let min = data.getMinutes();
  let seg = data.getSeconds();

  let msg_formatada = hora + ":" + min + ":" + seg + ": " + textoEntrada;

  return msg_formatada;
}

var fm = formatarMensagem;

console.log(fm("Um texto qualquer"));

console.log(fm());

console.log(formatarMensagem("Outro texto qualquer"));
