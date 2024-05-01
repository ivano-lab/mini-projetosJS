
function primos(lim) {
  for(let num = 2; num < lim; num++) {
      if (numPrimo(num)) console.log(num);
  }
}

function numPrimo(num) {
  for (let div = 2; div < num; div++) {
    if(num % div === 0) {
      return false;
    }
  }
  return true;
}

primos(15);