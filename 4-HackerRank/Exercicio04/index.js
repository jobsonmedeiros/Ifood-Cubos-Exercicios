function solucao(sequencia) {

    let direita = 0
    let esquerda = 0
    let indice = 0
	const imagens = [
        "Imagem 1", 
        "Imagem 2", 
        "Imagem 3",  
        "Imagem 4",  
        "Imagem 5",  
        "Imagem 6", 
        "Imagem 7"]

    let imagemAtual = imagens[indice]

    let qtdPulos = sequencia.length

    for(let i = 0; i < qtdPulos; i++){
        if(sequencia[i] == ">"){
            if(indice == 6) indice = 0
            else indice++
        } else if (sequencia[i] == "<"){
            if(indice == 0) indice = 6
            else indice--
        }
    }
    console.log(indice)

}

solucao(">>><></>")
solucao(">")
solucao("<")
solucao(">>>>>>>>>")