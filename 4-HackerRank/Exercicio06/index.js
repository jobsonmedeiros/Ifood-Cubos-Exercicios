function solucao(primeiraLetra, segundaLetra, palavras) {
  let palavrasRequeridas = [];
  console.log(palavras[0][0])

  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i][0] == primeiraLetra && palavras[i][1] == segundaLetra) {
      palavrasRequeridas.push(palavras[i]);
    }
  }

  if (palavrasRequeridas.length > 0){
    for (const cadaPalavra of palavrasRequeridas) {
        console.log(cadaPalavra)
    }
  } else {
    console.log("NENHUMA")
  }
}

solucao("e", "s", ["aveia", "casa", "escola", "avoluir", "ave"]);
