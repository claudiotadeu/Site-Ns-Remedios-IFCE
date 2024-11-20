const Pessoa = require('../lib/Pessoa');
class IdadeController {
    idade(request, response) {
        let body = request.body;
        console.log('parsed', body);

        let pessoa = new Pessoa(body.nome, parseInt(body['ano']), parseInt(body['doacao']));

        let idade = pessoa.getIdade();

        let saldo = pessoa.getSaldo();

        response.render('idade', {pessoa: pessoa, idade, saldo});
    }
}

module.exports = IdadeController;