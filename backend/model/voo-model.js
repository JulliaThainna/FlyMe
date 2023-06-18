const conexao = require("../config/database");

class Voo{
    adiciona(infos, res){
        let sql = "INSERT INTO voos SET ?";
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

    lista(res){
        const sql = 'SELECT * FROM voos'
        conexao.query(sql, (erro, resultado) => {
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

module.exports = new Voo;