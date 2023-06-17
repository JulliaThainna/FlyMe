const cadastroUser = require("../model/cadastroUser-model");
const rota = '/cadastro';

module.exports = app => { 
    app.post(rota, (req, res) => {
       console.log(req.body);
       cadastroUser.adiciona(req.body, res);
    });

    app.get(rota, (req, res) => {
        res.json({message: "testeeee"});
    });
}