
function exibirTipo(lim)  {
  for (let i = 0; i <= lim; i++) {
    if (i % 2 === 0)
        console.log(i, 'Par');
    else 
        console.log(i, 'Ímpsar');
  }
}