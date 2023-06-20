function fazDeleteVoo(url){
    let request = new XMLHttpRequest();
    request.open("DELETE", url, true);
    request.send();
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
    return request.responseText;
}

function deletarVoo(){
    let id = localStorage.getItem("id");
    fazDeleteVoo(`http://localhost:3000/gerenciarVoos/${id}`); 
}