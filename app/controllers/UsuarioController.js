const { response } = require('express');
const Usuario = require('../lib/Usuario');
const { render } = require('ejs');
class UsuarioController {

    constructor(usuariosStore) {
        this.usuarioStore = usuariosStore;
    }

        listar(request, response) {
        let usuarios = this.usuarioStore.listar();
        response.json(usuarios);
    }

    inserir(request, response) {
        let usuario = new Usuario(request.body.nome, request.body.username, request.body.senha, request.body.permissao); // parseInt(request.body.ano)
        this.usuarioStore.inserir(usuario);
        // response.status(201).json(usuario);
        let usuarios = this.usuarioStore.listar();
        // response.render('usuarios',{usuarios});
        response.render('usuarios', {usuarios});
    }

    alterar(request, response) {
        let id = request.params.id
        let usuario = new Usuario(request.body.nome, senha);  //  parseInt(request.body.ano)
        this.usuarioStore.alterar(id, usuario);
        response.send();
    }

    apagar(request, response) {
        let id = request.params.id
        this.usuarioStore.apagar(id);
        response.send();
    }

    ver(request, response) {
        let id = request.params.id
        let usuario = this.usuarioStore.ver(id);
        response.json(usuario);
    }
}

module.exports = UsuarioController;