function solucao(notas) {

	let maiorNota = notas[0]
    let menorNota = notas[0]
    let somaDasNotas = 0
    
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > maiorNota) maiorNota = notas[i]        
    }
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < menorNota) menorNota = notas[i]        
    }

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    console.log(menorNota)
    console.log(maiorNota)
    console.log(somaDasNotas)
    console.log(((somaDasNotas - (maiorNota + menorNota)))/(notas.length-2))
   
}

solucao([100, 100, 100, 50])