let postagem = {
  titulo: 'a',
  autor: 'b',
  mensagem: 'c',
  visualizações: 10,
  comentarios: [
    { autor: 'a', mensagem: 'b'},
    { autor: 'a', mensagem: 'b'}  
  ],
  aoVivo: true
}

console.log(postagem);

function Postagem(titulo, autor, mensagem) {
  this.titulo = titulo,
  this.autor = autor,
  this.mensagem = mensagem, 
  this.visualizacoes = 0
  this.comentarios = [],
  this.aoVivo = false
}

let post = new Postagem('a', 'b', 'c');
console.log(post);
