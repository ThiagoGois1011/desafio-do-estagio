function resolveQuintaQuestao(){

    const palavra = "Estágio";
    let palavraInvertida = "";

    for(let index = palavra.length - 1; index >= 0; index--){
        palavraInvertida = palavraInvertida + palavra[index];
    }

    const resposta = "\n Palavra: " + palavra + "\n" + "Palavra Invertida: " + palavraInvertida

    return resposta;
}

export default resolveQuintaQuestao;