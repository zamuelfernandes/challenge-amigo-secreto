//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById('amigo').value;
  if (nome != '') {
    amigos.push(nome);
    document.getElementById('amigo').value = '';
    listarAmigos();
  } else {
    alert('Por favor, insira um nome válido.');
  }
}

function listarAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpa a lista antes de adicionar novos amigos
  amigos.forEach(function(amigoNome) {
    let item = document.createElement('li');
    item.innerHTML = amigoNome;
    console.log(`Adicionando amigo ${amigoNome} à lista.`);
    lista.appendChild(item);
  });
}