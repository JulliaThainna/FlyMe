const user = require("../model/cadastroUser-model");
const rota = '/cadastro';

module.exports = app => { 
    app.post(rota, (req, res) => {
       user.cadastra(req.body, res);
    });
}