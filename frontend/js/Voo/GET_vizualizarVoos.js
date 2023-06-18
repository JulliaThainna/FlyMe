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
    let colData = document.createElement("td");
    let colHorario = document.createElement("td");
    let colDuracao = document.createElement("td");
    let colAssentos = document.createElement("td");
    let colClasse = document.createElement("td");
    let colValor = document.createElement("td");
    let colAcoes = document.createElement("td");

    colCA.innerHTML = voo.companhia_aerea;
    colOrigem.innerHTML = voo.origem;
    colDestino.innerHTML = voo.destino;
    colData.innerHTML = dataFormatada(voo.data_horario);
    colHorario.innerHTML = horaFormatada(voo.data_horario);
    colDuracao.innerHTML = voo.duracao;
    colAssentos.innerHTML = voo.assentos;
    colClasse.innerHTML = voo.classe;
    colValor.innerHTML = voo.valor;

    linha.appendChild(colCA);
    linha.appendChild(colOrigem);
    linha.appendChild(colDestino);
    linha.appendChild(colData);
    linha.appendChild(colHorario);
    linha.appendChild(colDuracao);
    linha.appendChild(colAssentos);
    linha.appendChild(colClasse);
    linha.appendChild(colValor);

    let editar = document.createElement('a');
    editar.setAttribute('data-bs-toggle', 'modal');
    editar.setAttribute('data-bs-target', '#modal-alterarVoo');
    let icon = document.createElement('i');
    icon.setAttribute('class', 'bi bi-pencil-fill');
    editar.appendChild(icon);

    colAcoes.appendChild(editar);
    linha.appendChild(colAcoes);
    tbody.appendChild(linha);

    deletar = document.createElement('a');
    deletar.setAttribute('data-bs-toggle', 'modal');
    deletar.setAttribute('data-bs-target', '#modal-deletarVoo');
    icon = document.createElement('i');
    icon.setAttribute('class', 'bi bi-trash-fill');
    deletar.appendChild(icon);

    colAcoes.appendChild(deletar);
    linha.appendChild(colAcoes);
    tbody.appendChild(linha);
    
    return tbody;
}

function dataFormatada(data_horario){
    data_horario = data_horario.toLocaleString();

    let partes = data_horario.split("T");
    let data = partes[0];

    // Separar os componentes da data
    let componentesData = data.split("-");
    let ano = componentesData[0];
    let mes = componentesData[1];
    let dia = componentesData[2];

    // Formatar a data no formato "dd/mm/yyyy"
    let dataFormatada = `${dia}/${mes}/${ano}`;

    return dataFormatada;
}

function horaFormatada(data_horario){
    let partes = data_horario.split("T");
    let hora = partes[1];

    // Separar os componentes da hora
    let componentesHora = hora.split(":");
    let horas = componentesHora[0];
    let minutos = componentesHora[1];
    let segundos = componentesHora[2];

    // Formatar a hora
    let horaFormatada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

    return horaFormatada;
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