function fazPost(url, body){
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body)); 
    request.onload = function(){
        console.log(this.responseText);
    };
    return request.responseText;
}

function cadastrarUsuario(){
    let url = "http://localhost:3000/login";
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let data_nasc = document.getElementById("data_nasc").value;
    let tel = document.getElementById("tel").value;
    let genero = document.getElementById("genero").value;
    body = {
        "nome" : nome,
        "cpf": cpf,
        "email": email,
        "senha": senha,
        "data_nasc": data_nasc,
        "telefone": tel,
        "genero": genero
    }
    fazPost(url, body); 
}
