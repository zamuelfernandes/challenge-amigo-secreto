//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let sorteado = null;

const input = document.getElementById("amigo");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    adicionarAmigo();
  }
});

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value;
  if (nome != "") {
    amigos.push(nome);
    document.getElementById("amigo").value = "";

    atualizarConteudoNaLista("resultado", "");
    atualizarConteudoNaLista("listaAmigos", null, amigos);
  } else {
    alert("Por favor, insira um nome válido.");
  }
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("Nenhum amigo cadastrado para sortear.");
    return;
  }

  let posicaoAmigoSorteado = parseInt(Math.random() * amigos.length);
  sorteado = amigos[posicaoAmigoSorteado];

  atualizarConteudoNaLista("resultado", "Amigo sorteado: " + sorteado);
}

function atualizarConteudoNaLista(listaId, conteudo, listaDeItems) {
  let elemento = document.getElementById(listaId);
  elemento.innerHTML = "";

  if (listaDeItems != null && listaDeItems.length > 0) {
    listaDeItems.forEach(function (item) {
      let li = document.createElement("li");
      li.innerHTML = item;
      elemento.appendChild(li);
    });
    return;
  } else if (conteudo != null) {
    let item = document.createElement("li");
    item.innerHTML = conteudo;
    elemento.appendChild(item);
  } else {
    alert("Nenhum item para exibir.");
  }
}
