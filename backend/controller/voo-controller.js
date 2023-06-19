const voo = require("../model/voo-model");
const rota = "/gerenciarVoos";

module.exports = app => { 
    app.post(rota, (req, res) => {
       voo.adiciona(req.body, res);
    });

    app.get(rota, (req, res) => {
        voo.lista(res);
    })

    app.delete(rota, (req, res) => {
        voo.deletaTodos(res);
    })

    app.delete(`${rota}/:id`, (req, res) => {
        voo.deleta(req.body, res);
    })

    app.put(rota, (req, res) => {
        voo.edita(req.body, res);
    })
}