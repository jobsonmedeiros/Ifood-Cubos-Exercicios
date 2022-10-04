function solucao(disparos) {
    let acertos = 0
	
    for (const cadaDisparo of disparos) {
        if(cadaDisparo > 70) acertos++
    }

    if(acertos >= 3){
        console.log(acertos)
    } else console.log("ELIMINADO")

}

solucao([0, 10, 50, 70, 80, 30])
solucao([0, 50, 90, 80, 100, 80, 40])