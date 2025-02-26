class LoginStore {
    usuarios = [];

    listar() {
        return this.usuarios;
    }

    inserir(usuario) {
        this.usuarios.push(usuario);
        usuario.id = this.usuarios.length;
    }

    ver(id) {
        return this.usuarios.filter(p => p.id == id)[0];
    }


    // pessoas = [];

    // listar() {
    //     return this.pessoas;
    // }

    // inserir(pessoa) {
    //     this.pessoas.push(pessoa);
    //     pessoa.id = this.pessoas.length;
    // }
    
    // alterar(id, p) {
    //     let pessoa = this.ver(id);
    //     Object.assign(pessoa, p);
    // }

    // apagar(id) {
    //     this.pessoas.splice(id, 1);
    // }

    // ver(id) {
    //     return this.pessoas.filter(p => p.id == id)[0];
    // }
}

module.exports = LoginStore;