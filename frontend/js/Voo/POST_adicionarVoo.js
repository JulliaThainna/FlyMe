function fazPost(url, body){
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = function(){
      if (request.status === 200){
        console.log("Voo adicionado com sucesso.");

        fecharModal("modal-adicionarVoo");
        abrirModal("modal-vooAdicionado");
      }
      else{
        console.log("Erro ao cadastrar voo.");
      }
    };
    request.send(JSON.stringify(body));
  }
  
  function adicionarVoo(){
    let url = "http://localhost:3000/gerenciarVoos";
    let ca = document.getElementById("ca").value;
    let origem = document.getElementById("origem").value;
    let destino = document.getElementById("destino").value;
    let data_horario = document.getElementById("data-horario").value;
    let duracao = document.getElementById("duracao").value;
    let assentos = document.getElementById("assentos").value;
    let classe = document.getElementById("classe").value;
    let valor = document.getElementById("valor").value;
    let body = {
      "companhia_aerea": ca,
      "origem": origem,
      "destino": destino,
      "data_horario": data_horario,
      "duracao": duracao,
      "assentos": assentos,
      "classe": classe,
      "valor": valor,
    };
    fazPost(url, body); 
  }
  
  function abrirHome(){
    window.location.href = "home.html";
  }

  function abrirModal(modal){
    modal = new bootstrap.Modal(getModal(modal));
    modal.show();
  }

  function fecharModal(modal){
    modal = bootstrap.Modal.getInstance(getModal(modal));
    modal.hide();
  }

  function getModal(nomeModal){
    let modal = document.getElementById(nomeModal);
    return modal
  }
