let faixas = [
  {tooltip: 'até R$700' , minimo: 0, maximo: 700},
  {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
  {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 9999999}
];

function criarFaixaPreco(tooltip, minimo, maximo) {
    return {
      tooltip,
      minimo,
      maximo
    }
}

let faixas2 = [
  criarFaixaPreco('a', 1, 100),
  criarFaixaPreco('b', 100, 1000),
  criarFaixaPreco('c', 20, 20000)
]

function FaixaPreco(tooltip, minimo, maximo) {
  this.tooltip = tooltip,
  this.minimo = minimo,
  this.maximo = maximo
}

let faixas3 = [
  new FaixaPreco('d', 10, 30),  
  new FaixaPreco('f', 20, 30),
  new FaixaPreco('g', 30, 40)
]

console.log(faixas);
console.log(faixas2);
console.log(faixas3);