function visualizaInfosVoo(voo){
  document.getElementById("caModal").value = voo.companhia_aerea;
  document.getElementById("origemModal").value = voo.origem;
  document.getElementById("destinoModal").value = voo.destino;
  document.getElementById("data-horarioModal").value = formatarDataHora(voo.data_horario, 1);
  document.getElementById("duracaoModal").value = voo.duracao;
  document.getElementById("assentosModal").value = voo.assentos;
  document.getElementById("classeModal").value = voo.classe;
  document.getElementById("valorModal").value = voo.valor;
}

function mainEditar(){
  let id = localStorage.getItem("id");
  
  let dados = fazGet(`http://localhost:3000/gerenciarVoos/${id}`);
  let voo = JSON.parse(dados);
  voo.forEach(element => {
    visualizaInfosVoo(element);
}); 
}