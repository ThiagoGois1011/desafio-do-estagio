import resolvePrimeiraQuestao from "./primeira_questao.js";
import resolveSegundaQuestao from "./segunda_questao.js";
import resolveTerceiraQuestao from "./terceira_questao.js";
import resolveQuintaQuestao from "./quinta_questao.js";


function imprimeFolhaDeRespotas(arrayRespostas){
    arrayRespostas.forEach((element, index) => {
        const HtmlElement = document.createElement("p");
        HtmlElement.innerText = index + 1 + ") " + element;
        const container = document.getElementById("campo_de_respostas");
        container.appendChild(HtmlElement);
    });

}

let arrayRespotas = [];
arrayRespotas.push(resolvePrimeiraQuestao());
arrayRespotas.push(resolveSegundaQuestao());
arrayRespotas.push(resolveTerceiraQuestao());
arrayRespotas.push("Primeiramente, ligaria o primeiro interruptor e o segundo interruptor e esperaria um certo período de tempo, depois desligaria o primeiro interruptor e iria checar a primeira sala, caso a lâmpada estivesse: \n\n Desligada e quente, significa que o primeiro interruptor é quem liga está lâmpada.\n Ligada, significaria que o segundo interruptor é quem liga está lâmpada. \n Desligada e fria, significa que o terceiro interruptor é quem liga está lâmpada.\n\n Depois eu iria na segundo sala, e só restariam duas das possibilidades descritas acima, caso uma delas seja aplicada na segunda sala, o interruptor que sobrasse seria a da terceira sala. ");
arrayRespotas.push(resolveQuintaQuestao());
imprimeFolhaDeRespotas(arrayRespotas);