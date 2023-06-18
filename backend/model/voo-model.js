const conexao = require("../config/database");

class Voo{
    adiciona(req, res){
        let sql = "INSERT INTO voos (companhia_aerea, origem, destino, data_horario, duracao, assentos, classe, valor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        conexao.query(sql, [req.companhia_aerea, req.origem, req.destino, req.data_horario, req.duracao, req.assentos, req.classe, req.valor], (erro, resultado) => {
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
        const sql = "SELECT * FROM voos"
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