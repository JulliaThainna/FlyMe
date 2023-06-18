function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function fazLinha(voo){
    let linha = document.createElement("tr");
    let colCA = document.createElement("td");
    let colOrigem = document.createElement("td");
    let colDestino = document.createElement("td");
    let colData_horario= document.createElement("td");
    let colDuracao = document.createElement("td");
    let colAssentos = document.createElement("td");
    let colClasse = document.createElement("td");
    let colValor = document.createElement("td");

    colCA.innerHTML = voo.companhia_aerea;
    colOrigem.innerHTML = voo.origem;
    colDestino.innerHTML = voo.destino;
    colData_horario.innerHTML = voo.data_horario;
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

    return linha;
}

function main(){
    let dados = fazGet("http://localhost:3000/gerenciarVoos");
    let tab = document.getElementById("tabela-voos");
    let voo = JSON.parse(dados);
    voo.forEach(element => {
        let linha = fazLinha(element);
        tab.appendChild(linha);
    });
}

main();