function fazGet(url){
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  request.onload = function(){
    if (request.status === 200){
      console.log("Voos carregados com sucesso.");
    }
    else{
      console.log("Erro ao carregar voos.");
    }
  };
  return request.responseText;
}

function fazLinha(voo){
  let tabela = document.getElementById("tabela-voos");

  let tbody = tabela.querySelector("tbody");
  let linha = document.createElement("tr");
  let colId = document.createElement("td");
  colId.setAttribute("id", `voo-id${voo.id}`);
  let colCA = document.createElement("td");
  let colOrigem = document.createElement("td");
  let colDestino = document.createElement("td");
  let colData_horario = document.createElement("td");
  let colDuracao = document.createElement("td");
  let colAssentos = document.createElement("td");
  let colClasse = document.createElement("td");
  let colValor = document.createElement("td");
  let colAcoes = document.createElement("td");

  colId.innerHTML = voo.id;
  colCA.innerHTML = voo.companhia_aerea;
  colOrigem.innerHTML = voo.origem;
  colDestino.innerHTML = voo.destino;
  colData_horario.innerHTML = formatarDataHora(voo.data_horario, 0);
  colDuracao.innerHTML = voo.duracao;
  colAssentos.innerHTML = voo.assentos;
  colClasse.innerHTML = voo.classe;
  colValor.innerHTML = voo.valor;

  linha.appendChild(colId);
  linha.appendChild(colCA);
  linha.appendChild(colOrigem);
  linha.appendChild(colDestino);
  linha.appendChild(colData_horario);
  linha.appendChild(colDuracao);
  linha.appendChild(colAssentos);
  linha.appendChild(colClasse);
  linha.appendChild(colValor);
  
  let editar = document.createElement("a");
  editar.setAttribute("data-bs-toggle", "modal");
  editar.setAttribute("data-bs-target", "#modal-alterarVoo");
  editar.setAttribute("onclick", `getIdEditar(${voo.id}); mainEditar();`);
  let icon = document.createElement("i");
  icon.setAttribute("class", "bi bi-pencil-fill");
  icon.setAttribute("data-id", `botao-editar`);
  editar.appendChild(icon);

  colAcoes.appendChild(editar);
  linha.appendChild(colAcoes);
  tbody.appendChild(linha);

  deletar = document.createElement("a");
  deletar.setAttribute("data-bs-toggle", "modal");
  deletar.setAttribute("data-bs-target", "#modal-deletarVoo");
  deletar.setAttribute("onclick", `getIdDeletar(${voo.id})`);
  icon = document.createElement("i");
  icon.setAttribute("class", "bi bi-trash-fill");
  icon.setAttribute("id", "botao-deletar");
  deletar.appendChild(icon);

  colAcoes.appendChild(deletar);
  linha.appendChild(colAcoes);
  tbody.appendChild(linha);
  
  return tbody;
}

function main(){
  let dados = fazGet("http://localhost:3000/gerenciarVoos");
  let tabela = document.getElementById("tabela-voos");
  let voo = JSON.parse(dados);
  voo.forEach(element => {
      let tbody = fazLinha(element);
      tabela.appendChild(tbody);
  }); 
}
