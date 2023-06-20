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

function formatarDataHora(dataHora, flag) {
    const data = new Date(dataHora);
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    const horas = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");
    
    if(flag === 0){
        return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
    }
    else if(flag === 1){
        return `${ano}-${mes}-${dia}T${horas}:${minutos}`;
    }
}

function getIdDeletar(voo_id){
    localStorage.setItem("id", voo_id);
}

function abrirHome(){
    window.location.href = "home.html";
}

function verificarDataHoraFutura(flag) {
    let inputDataHora;
    if(flag === 0){
        inputDataHora = document.getElementById("data-horario");
    }
    else{
        inputDataHora = document.getElementById("data-horarioModal");
    }
    let dataHoraSelecionada = new Date(inputDataHora.value);
    let dataHoraAtual = new Date();
  
    if(dataHoraSelecionada <= dataHoraAtual){
        inputDataHora.setCustomValidity("Por favor, selecione uma data e hora no futuro");
        return false;
    }
    return true;
}
