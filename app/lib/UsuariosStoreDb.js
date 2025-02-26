class UsuarioStoreDb {
    gravar(request, response) {
        let usuario = new Usuario(request.body.nome, request.body.username, request.body.senha, request.body.permissao); // parseInt(request.body.ano)
        this.usuarioStore.inserir(usuario);
        // response.status(201).json(usuario);
        let usuarios = this.usuarioStore.listar();
        // response.render('usuarios',{usuarios});
        response.render('usuarios', {usuarios});
        // btn_gravar_Novo.addEventListener("click",(evt)=>{
        // });
    }

    // listar() {
    //     return this.usuarios;
    // }

    // inserir(usuario) {
    //     this.usuarios.push(usuario);
    //     usuario.id = this.usuarios.length;
    // }
    
    // alterar(id, p) {
    //     let usuario = this.ver(id);
    //     Object.assign(usuario, p);
    // }

    // apagar(id) {
    //     this.usuarios.splice(id, 1);
    // }

    // ver(id) {
    //     return this.usuarios.filter(p => p.id == id)[0];
    // }
}

module.exports = UsuarioStoreDb;