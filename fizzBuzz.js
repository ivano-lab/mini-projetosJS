
function fizzBuzz(entrada){
  if (typeof entrada !== 'number') {
    return 'Não é um número';  
  }
  if (entrada % 3 === 0) {
    return 'Fizz';  
  }
  if (entrada % 5 === 0) {
    return 'Buzz';  
  }
  if (entrada % 3 === 0 && entrada % 5 === 0) {
    return 'FizzBuzz';  
  }
  return entrada;
}

console.log(fizzBuzz(20));