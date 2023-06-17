const conexao = require("../config/database");

class User{
    cadastra(infos, res){
        let sql = "INSERT INTO users SET ?";
        conexao.query(sql, infos, (erro, resultado) => {
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