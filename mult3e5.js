
function somar(lim) {
  let mult3 = 0;
  let mult5 = 0;
  for(i = 0; i <= lim; i++) {
    if(i % 3 === 0)
    mult3 += i;
    if(i % 5 === 0)
    mult5 += i;
  }
  console.log(mult3 + mult5);
} 