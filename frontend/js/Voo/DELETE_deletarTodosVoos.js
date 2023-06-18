function fazDelete(url){
    let request = new XMLHttpRequest();
    request.open("DELETE", url, false);
    request.onload = function(){
        if (request.status === 200){
            console.log("Todos os voos foram deletados com sucesso.");
            location.reload();
            fecharModal("modal-deletarTodosVoos");
            abrirModal("modal-voosDeletados");
        }
        else{
            console.log("Erro ao deletar todos voos.");
        }
    };
    request.send();
    return request.responseText;
}

function deletarTodosVoos(){
    let url = "http://localhost:3000/gerenciarVoos";
    fazDelete(url); 
}

function abrirModal(modal){
    modal = new bootstrap.Modal(getModal(modal));
    modal.show();
  }

function fecharModal(modal){
    modal = bootstrap.Modal.getInstance(getModal(modal));
    modal.hide();
}