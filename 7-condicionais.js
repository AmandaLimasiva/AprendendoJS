console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)
const idadeComprador = 19;
const pessoaAcompanhada = false;
const passagemComprada = true;

console.log("Destinos Possíveis");
console.log(listaDeDestinos);

//if (idadeComprador >= 18) {
// console.log("Comprador Maior de Idade")
//listaDeDestinos.splice(1, 1); //removendo um item    
//} else if (pessoaAcompanhada == true) {
// console.log("Comprador está Acompanhado");
// listaDeDestinos.splice(1, 1); //removendo um item    
//} else {
// console.log("Comprador não é maior de idade, não é permitida a venda da passagem");}
//console.log(listaDeDestinos);


if (
    idadeComprador >= 18 || pessoaAcompanhada == true) {
    console.log("Comprador é Maior de Idade")

    listaDeDestinos.splice(1, 1); //removendo um item    
} else {
    console.log("Comprador não é maior de idade, não é permitida a venda da passagem");
}

console.log("Embarque: \n \n");
if (idadeComprador >= 18 && passagemComprada) {
    console.log("Boa Viagem!!")
} else {
    console.log("Você não pode embarcar!");

}

//console.log(listaDeDestinos);

