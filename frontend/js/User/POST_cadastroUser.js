function fazPost(url, body) {
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = function() {
      if (request.status === 200) {
        let modalSucesso = new bootstrap.Modal(document.getElementById('modal-cadastroUser'));
        modalSucesso.show();
        console.log("Cadastro realizado com sucesso.");
      } else {
        console.log("Erro ao fazer o cadastro.");
      }
    };
    request.send(JSON.stringify(body));
  }
  
  function cadastrarUsuario() {
    let url = "http://localhost:3000/cadastro";
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let data_nasc = document.getElementById("data_nasc").value;
    let tel = document.getElementById("tel").value;
    let genero = document.getElementById("genero").value;
    let body = {
      "nome" : nome,
      "cpf": cpf,
      "email": email,
      "senha": senha,
      "data_nasc": data_nasc,
      "telefone": tel,
      "genero": genero
    };
    fazPost(url, body); 
  }
  
  function abrirHome(){
    window.location.href = "home.html";
  }