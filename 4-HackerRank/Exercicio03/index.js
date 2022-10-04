
function solucao(precos) {
let total = 0
let totalFinal = 0
let menorValor = precos[0]

  const qtdItens = precos.length

// Achando item de menor valor
  for (let i = 1; i < precos.length; i++) {
    if (precos[i] < menorValor) {
      menorValor = precos[i];      
    }}

// Se houver comprado menos de 5 itens
    if(qtdItens < 5){
      for(let cadaItem of precos){
        totalFinal += cadaItem
      }
      
    } else {
      for(let cadaItem of precos){
        total += cadaItem
      }
      totalFinal = total - menorValor
    }

console.log(totalFinal)
}

solucao([100, 500, 100, 200, 50])
/*
function solucao(precos) {
  let menorValor = precos[0];
  let soma = 0;
  let totalFinal;
  let total = 0;
  let indice = 0;

  for (let i = 1; i < precos.length; i++) {
    if (precos[i] < menorValor) {
      menorValor = precos[i];
      indice = i;
    }
  }

  if (precos.length < 5) {
    for (let cadaItem of precos) {
      total += cadaItem;
      totalFinal = total
    }
  } else {
    for (let cadaItem of precos) {
      total += cadaItem;
    }
    totalFinal = total - precos[indice];
  }

  console.log(totalFinal);
}

solucao([100, 100, 100, 50]);
*/