const conexao = require("../config/database");

class User{
    cadastra(req, res){
        let sql = "INSERT INTO users (cpf, nome, email, senha, telefone, genero, data_nasc) VALUES (?, ?, ?, ?, ?, ?, ?)";
        conexao.query(sql, [req.cpf, req.nome, req.email, req.senha, req.telefone, req.genero, req.data_nasc], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
                console.log(erro);
            }
            else{
                res.status(200).json(resultado);
            }
        });
    }
}

module.exports = new User;