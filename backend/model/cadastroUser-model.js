const conexao = require("../config/database");

class CadastroUser{
    adiciona(users, res){
        let sql = 'INSERT INTO users SET ?'
        conexao.query(sql, users, (erro, resultado)=> {
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

module.exports = new CadastroUser;