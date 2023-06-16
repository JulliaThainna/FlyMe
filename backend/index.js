const customExpress = require('./config/customExpress');
const conexao = require("./config/database");

conexao.connect(erro => {
    if(erro){
        console.log(erro);
    }
    else{
        console.log('Conectado ao banco de dados!');
        const app = customExpress();
        app.listen(3000, () => console.log('servidor rodando na porta 3000'));
    }
});