function solucao(resultados) {
    let vitorias = 0
    let derrotas = 0
    let empates = 0

	for (let i = 0; i < resultados.length; i++) {
        if(resultados[i] == "V") {
            vitorias++
        } else if(resultados[i] == "D"){
            derrotas++
        } else if(resultados[i] == "E"){
            empates++
        }
    }

    console.log(vitorias * 3 + derrotas * 0 + empates * 1)

}

solucao([ "V", "E", "V", "E",])