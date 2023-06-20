function fazPostPesquisa(url, body){
  let request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/json");
  request.onload = function(){
    if (request.status === 200){
      console.log("Pesquisa enviada com sucesso.");
      let voos =  JSON.parse(request.responseText);
      mostraVoos(voos);
    }
    else{
      console.log("Erro ao pesquisar voos.");
    }
  };
  request.send(JSON.stringify(body)); 
}
    
function enviarInfos(){
  let url = "http://localhost:3000/pesquisarVoos";
  let origem = document.getElementById("origem").value;
  let destino = document.getElementById("destino").value;
  //Fazer verificação se a data de ida é menor que a de volta e se a data de volta é maior que a de ida
  let data_ida;
  let data_volta;
  let dataVerificadaIda = verificarDataHoraFutura(2);
  let dataVerificadaVolta = verificarDataHoraFutura(3);
  if(dataVerificadaIda == false || dataVerificadaVolta == false){
    return;
  }
  data_ida = document.getElementById("data-ida").value;
  data_volta = document.getElementById("data-volta").value;
  let qtd_passageiros = document.getElementById("qtd-passageiros").value;
  let classe = document.getElementById("classe").value;
  let body = {
    "origem": origem,
    "destino": destino,
    "data_ida": data_ida,
    "data_volta": data_volta,
    "qtd_passageiros": qtd_passageiros,
    "classe": classe
  };
  
  fazPostPesquisa(url, body); 
}

function mostraVoos(voos){
  //window.location.href = "../html/voos.html";
  console.log(voos);
}
  