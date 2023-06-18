function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function fazLinha(voo){
    let tabela = document.getElementById("tabela-voos");
    let tbody = tabela.querySelector("tbody");

    let linha = document.createElement("tr");
    let colCA = document.createElement("td");
    let colOrigem = document.createElement("td");
    let colDestino = document.createElement("td");
    let colData_horario = document.createElement("td");
    let colDuracao = document.createElement("td");
    let colAssentos = document.createElement("td");
    let colClasse = document.createElement("td");
    let colValor = document.createElement("td");
    let colAcoes = document.createElement("td");

    colCA.innerHTML = voo.companhia_aerea;
    colOrigem.innerHTML = voo.origem;
    colDestino.innerHTML = voo.destino;
    colData_horario.innerHTML = formatarDataHora(voo.data_horario);
    colDuracao.innerHTML = voo.duracao;
    colAssentos.innerHTML = voo.assentos;
    colClasse.innerHTML = voo.classe;
    colValor.innerHTML = voo.valor;

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
    let icon = document.createElement("i");
    icon.setAttribute("class", "bi bi-pencil-fill");
    editar.appendChild(icon);

    colAcoes.appendChild(editar);
    linha.appendChild(colAcoes);
    tbody.appendChild(linha);

    deletar = document.createElement("a");
    deletar.setAttribute("data-bs-toggle", "modal");
    deletar.setAttribute("data-bs-target", "#modal-deletarVoo");
    icon = document.createElement("i");
    icon.setAttribute("class", "bi bi-trash-fill");
    deletar.appendChild(icon);

    colAcoes.appendChild(deletar);
    linha.appendChild(colAcoes);
    tbody.appendChild(linha);
    
    return tbody;
}

function formatarDataHora(dataHora) {
    const data = new Date(dataHora);
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    const horas = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");
  
    return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
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

main();