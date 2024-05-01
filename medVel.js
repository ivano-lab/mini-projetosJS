verificarVel(130);

function verificarVel(vel) {
  const velMax = 70;
  const kmPorPonto = 5;
  if (vel <= velMax)
      console.log('ok');
  else {
    const pontos = Math.floor((vel - velMax) / kmPorPonto);
    if (pontos >= 12)
      console.log('Carteira Suspensa');
    else 
      console.log('Pontos', pontos);
  }
}