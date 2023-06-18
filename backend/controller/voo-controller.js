const voo = require("../model/voo-model");
const rota = "/gerenciarVoos";

module.exports = app => { 
    app.post(rota, (req, res) => {
       voo.adiciona(req.body, res);
    });

    app.get(rota, (req, res) => {
        voo.lista(res);
    })
}