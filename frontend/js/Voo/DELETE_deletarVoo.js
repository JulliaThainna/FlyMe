var voo_id;

function fazDeleteVoo(url, body){
    let request = new XMLHttpRequest();
    request.open("DELETE", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = function(){
        if (request.status === 200){
            console.log("Voo deletado com sucesso.");

            fecharModal("modal-deletarVoo");
            abrirModal("modal-vooDeletado");
        }
        else{
            console.log("Erro ao deletar voo.");
        }
    };
    request.send(JSON.stringify(body));
}

function getIdDeletar(voo_id){
    voo_id = localStorage.setItem("id", voo_id);
}

function deletarVoo(){
    let url = "http://localhost:3000/gerenciarVoos/id";

    let id = localStorage.getItem("id");
    let body = {
        "id": id,
    };

    fazDeleteVoo(url, body); 
}

function fecharModal(modal){
    modal = bootstrap.Modal.getInstance(getModal(modal));
    modal.hide();
}
  
function getModal(nomeModal){
    let modal = document.getElementById(nomeModal);
    return modal
}