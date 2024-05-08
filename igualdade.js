function Endereco(rua, cidade, cep) {
  this.rua = rua,
  this.cidade = cidade,
  this.cep = cep
}

const end1 = new Endereco('a', 'b', 'c');
const end2 = new Endereco('a', 'b', 'c');
const end3 = end1;

function saoIguais(end1, end2) {
  return end1.rua === end2.rua &&
         end1.cidade === end2.cidade &&
         end1.cep === end2.cep
}

console.log(saoIguais(end1, end2));

function endMemIguais(end1, end2) {
  return end1 === end2;
}

console.log(endMemIguais(end1, end2));
console.log(endMemIguais(end1, end3));
