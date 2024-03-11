function resolveSegundaQuestao(){
    const arrayFibonacci = [0, 1];
    const numeroInformado = 89;
    const numeroInformado1 = 7;

    for(let i = 0; i < 50; i++){
        const arrayLength = arrayFibonacci.length;
        const penultimoItem = arrayFibonacci[arrayLength - 2];
        const ultimoItem = arrayFibonacci[arrayLength - 1];
        arrayFibonacci.push(penultimoItem + ultimoItem);
    }

    const arrayNumeroEstaPresente = [false, false];

    for (let index = 0; index < arrayFibonacci.length; index++) {
        const numero = arrayFibonacci[index];

        if(!arrayNumeroEstaPresente[0] && numeroInformado == numero){
            arrayNumeroEstaPresente[0] = true;
        }else if(!arrayNumeroEstaPresente[1] && numeroInformado1 == numero){
            arrayNumeroEstaPresente[1] = true;
        }
        
    }

    const checagem = arrayNumeroEstaPresente[0]?" está na sequência de Fibonacci": " não está na sequência de Fibonacci";
    const checagem1 = arrayNumeroEstaPresente[1]?" está na sequência de Fibonacci": " não está na sequência de Fibonacci";

    const r = "o número " + numeroInformado + checagem;
    const r1 = "o número " + numeroInformado1 + checagem1;
    return "\n" +  r + " \n " + r1;
}

export default resolveSegundaQuestao;