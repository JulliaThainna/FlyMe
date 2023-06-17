const voo = require("../model/adicionaVoo-model");
const rota = '/adicionarVoo';

module.exports = app => { 
    app.post(rota, (req, res) => {
       voo.adiciona(req.body, res);
    });
}