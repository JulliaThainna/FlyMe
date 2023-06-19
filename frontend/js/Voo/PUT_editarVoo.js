function fazPut(url, body){
    let request = new XMLHttpRequest();
    request.open("PUT", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = function(){
        if (request.status === 200){
            console.log("Voo editado com sucesso.");

            fecharModal("modal-alterarVoo");
            abrirModal("modal-vooAlterado");
        }
        else{
            console.log("Erro ao editar voo.");
        }
    };
    request.send(JSON.stringify(body));
}

function getIdEditar(voo_id){
    localStorage.setItem("id", voo_id);
}

function editarVoo(){
    let url = "http://localhost:3000/gerenciarVoos";

    let id = localStorage.getItem("id");
    let data_horario = document.getElementById("data-horarioModal").value;
    let duracao = document.getElementById("duracaoModal").value;
    let assentos = document.getElementById("assentosModal").value;
    let body = {
        "id": id,
        "data_horario": data_horario,
        "duracao": duracao,
        "assentos": assentos
    };
    
    fazPut(url, body); 
}