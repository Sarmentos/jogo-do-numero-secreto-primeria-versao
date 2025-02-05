alert('boas vindas ao jogo do número secreto');
var numeroMaximo = 5000;
var numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
var chute;
var tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`ola, escolha um número entre 1 e ${numeroMaximo}: `);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que o ${chute} `);
        } else {
            alert(`O numero secreto é maior que o ${chute} `);
        }
        tentativas ++;
    }
}

var palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`);
