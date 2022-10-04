// Solução removendo colchetes do argumento recebido
function solucao(letra, palavras) {

  let erros = 0;

  for (let i = 0; i < palavras.length; i++) {
    let letraInicial = palavras[i].charAt(0)

    if (letraInicial === letra) {
      continue
    } else {
      erros++;
    }
  }
console.log(erros)
}

solucao("m", ["mamao", "maca", "melao", "melancia", "laranja"]);

/*
function solucao(letra, palavras) {

    let erros = 0;
  
    for (let i = 0; i < palavras.length; i++) {
      if (palavras[i].charAt(0) === letra) {
        continue;
      } else erros++;
    }
    console.log(erros)
  }
  
  solucao("m", ["mamao", "maca", "melao", "melancia", "laranja"]);
  */
