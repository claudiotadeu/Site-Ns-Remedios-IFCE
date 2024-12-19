const Usuario = require('../lib/Usuario');
class UsuarioController {

    constructor(usuariosStore) {
        this.usuarioStore = usuariosStore;
    }

    login(request, response) {
        let body = request.body;

        let usuario = new Usuario(body.usuario, body.senha); // parseInt(body['ano']), parseInt(body['doacao'])

        let idade = pessoa.getIdade();

        let saldo = pessoa.getSaldo();

        response.render('idade', {usuario: usuario, senha});
    }

    listar(request, response) {
        let usuario = this.usuariosStore.listar();
        response.json(usuarios);
    }

    inserir(request, response) {
        let usuario = new Usuario(request.body.usuario, senha); // parseInt(request.body.ano)
        this.usuariosStore.inserir(usuario);
        response.status(201).json(usuario);
    }

    alterar(request, response) {
        let id = request.params.id
        let usuario = new Usuario(request.body.usuario, senha);  //  parseInt(request.body.ano)
        this.usuariosStore.alterar(id, usuario);
        response.send();
    }

    apagar(request, response) {
        let id = request.params.id
        this.usuariosStore.apagar(id);
        response.send();
    }

    ver(request, response) {
        let id = request.params.id
        let usuario = this.usuariosStore.ver(id);
        response.json(usuario);
    }
}

module.exports = UsuarioController;