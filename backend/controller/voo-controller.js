const voo = require("../model/voo-model");
const rota = "/gerenciarVoos";

module.exports = app => { 
    app.post(rota, (req, res) => {
       voo.adiciona(req.body, res);
    });

    app.get(rota, (req, res) => {
        voo.lista(res);
    })

    app.get(`${rota}/:id`, (req, res) => {
        const id = req.params.id;
        voo.listaUm(id, res);
    })

    app.delete(rota, (req, res) => {
        voo.deletaTodos(res);
    })

    app.delete(`${rota}/:id`, (req, res) => {
        const id = req.params.id;
        voo.deleta(id, res);
    })

    app.put(rota, (req, res) => {
        voo.edita(req.body, res);
    })
}