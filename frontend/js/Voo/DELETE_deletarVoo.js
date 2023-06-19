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

function deletarVoo(){
    let url = "http://localhost:3000/gerenciarVoos/id";

    let id = localStorage.getItem("id");
    let body = {
        "id": id,
    };

    fazDeleteVoo(url, body); 
}