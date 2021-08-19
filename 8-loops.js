console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)
const idadeComprador = 19;
const pessoaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos Possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || pessoaAcompanhada == true;

let contador = 0;
let = destinoExiste = false;
while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem!");
} else {
    console.log("Desculpe, tivemos um erro! ")
}


for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
}

