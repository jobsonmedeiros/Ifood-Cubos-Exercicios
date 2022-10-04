function solucao(stringCorrompida) {
  let stringLimpa = "";

  for (let i = 0; i < stringCorrompida.length; i++) {
    if (
      stringCorrompida[i] == "!" ||
      stringCorrompida[i] == "@" ||
      stringCorrompida[i] == "#" ||
      stringCorrompida[i] == "$" ||
      stringCorrompida[i] == "%" ||
      stringCorrompida[i] == "&" ||
      stringCorrompida[i] == "*" ||
      stringCorrompida[i] == "(" ||
      stringCorrompida[i] == ")" ||
      stringCorrompida[i] == "."
    ) {
      continue;
    } else {
      stringLimpa = stringLimpa + stringCorrompida[i];
    }
  }
  console.log(stringLimpa);
}

solucao("*Canis %lupus )familiaris");
solucao("Felis) silvestris *catus&");
solucao("$Ailuropoda@ melanoleuca!");
