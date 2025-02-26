class UsuarioStore {
    usuarios = [];

    listar() {
        return this.usuarios;
    }

    inserir(usuario) {
        this.usuarios.push(usuario);
        usuario.id = this.usuarios.length;
    }
    
    alterar(id, p) {
        let usuario = this.ver(id);
        Object.assign(usuario, p);
    }

    apagar(id) {
        this.usuarios.splice(id, 1);
    }

    ver(id) {
        return this.usuarios.filter(p => p.id == id)[0];
    }
}

module.exports = UsuarioStore;