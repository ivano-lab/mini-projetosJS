
const pessoa = {
  nome: 'José',
  sexo: 'M',
  idade: 35,
  email: 'eagora@jose.com.br'
}

function exibirProp(obj) {
  for (prop in obj)
      if(typeof obj[prop] === 'string')
          console.log(prop, obj[prop])
}

exibirProp(pessoa);


