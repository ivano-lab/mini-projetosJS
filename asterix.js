exibirAsterix(10);

function exibirAsterix(linhas) {
  let padrao = '';
  for (let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
  }
}