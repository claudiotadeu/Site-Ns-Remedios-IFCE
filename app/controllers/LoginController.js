const Login = require('../lib/Login');
class LoginController{

    constructor(loginStore) {
        this.loginStore = loginStore;
    }

    consulta(request, response) {
        // let body = request.body;
        // let usuario = new Login(body.username, body.senha);
        // let nome = usuario.getUsuario();
        // response.render('login', {usuario: usuario, nome});
        response.render('administracao');
    }

    listar(request, response) {
        let usuarios = this.loginStore.listar();
        response.json(usuarios);
    }

    inserir(request, response) {
        let body = request.body;
        let usuario = new Login(body.username, body.senha);
        let nome = 'Claudio Tadeu'
        this.loginStore.inserir(usuario);
        response.status(201).json(usuario);
        // response.render('login', {usuario: usuario, nome});
    }

    ver(request, response) {
        let id = request.params.id
        let usuario = this.loginStore.ver(id);
        response.json(usuario);
    }

}

module.exports = LoginController;


// const Pessoa = require('../lib/Pessoa');
// class PessoaController {

//     constructor(pessoasStore) {
//         this.pessoasStore = pessoasStore;
//     }

//     idade(request, response) {
//         let body = request.body;

//         let pessoa = new Pessoa(body.nome, parseInt(body['ano']), parseInt(body['doacao']));

//         let idade = pessoa.getIdade();

//         let saldo = pessoa.getSaldo();

//         response.render('idade', {pessoa: pessoa, idade, saldo});
//     }

//     listar(request, response) {
//         let pessoas = this.pessoasStore.listar();
//         response.json(pessoas);
//     }

//     inserir(request, response) {
//         let pessoa = new Pessoa(request.body.nome, parseInt(request.body.ano));
//         this.pessoasStore.inserir(pessoa);
//         response.status(201).json(pessoa);
//     }

//     alterar(request, response) {
//         let id = request.params.id
//         let pessoa = new Pessoa(request.body.nome, parseInt(request.body.ano));
//         this.pessoasStore.alterar(id, pessoa);
//         response.send();
//     }

//     apagar(request, response) {
//         let id = request.params.id
//         this.pessoasStore.apagar(id);
//         response.send();
//     }

//     ver(request, response) {
//         let id = request.params.id
//         let pessoa = this.pessoasStore.ver(id);
//         response.json(pessoa);
//     }
// }

// module.exports = PessoaController;