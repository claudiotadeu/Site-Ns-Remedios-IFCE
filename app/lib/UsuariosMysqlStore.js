class UsuariosMysqlStore {
    constructor(conectar) {
        this.conectar = conectar;
    }

    async listar() {
        try {
            let connection = await this.conectar();
            const [results, fields] = await connection.query(
                'SELECT * FROM `usuarios`'
            );
    
            return results;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async inserir(usuario) {
        try {
            let connection = await this.conectar();
            let sql = `INSERT INTO usuarios VALUES (DEFAULT, ?, ?, ?, ?, ?)`;

            console.log(sql);
            const [results, fields] = await connection.query(sql, [
                usuario.nome,
                usuario.username,
                usuario.senha,
                usuario.permissao,
                usuario.situacao
            ]);
            usuario.id = results.insertId;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

//     alterar(id, p) {
//     }

//     apagar(id) {
//     }

    async ver(id) {
        try {
            let connection = await this.conectar();
            const [results, fields] = await connection.query(
                'SELECT * FROM `usuarios` WHERE id=?',
                [id]
            );
    
            return results[0];
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    
//     procurarPorNome(nome) {
//         return ;
//     }


}

module.exports = UsuariosMysqlStore;


// gravar(request, response) {
//     let usuario = new Usuario(request.body.nome, request.body.username, request.body.senha, request.body.permissao); // parseInt(request.body.ano)
//     this.usuarioStore.inserir(usuario);
//     // response.status(201).json(usuario);
//     let usuarios = this.usuarioStore.listar();
//     // response.render('usuarios',{usuarios});
//     response.render('usuarios', {usuarios});
//     // btn_gravar_Novo.addEventListener("click",(evt)=>{
//     // });
// }

                                    // class PessoasMysqlStore {

                                    //     constructor(conectar) {
                                    //         this.conectar = conectar;
                                    //     }

                                        //     async listar() {
                                        //         try {
                                        //             let connection = await this.conectar();
                                        //             const [results, fields] = await connection.query(
                                        //                 'SELECT * FROM `pessoas`'
                                        //             );
                                            
                                        //             return results;
                                        //         } catch (err) {
                                        //             console.log(err);
                                        //             throw err;
                                        //         }
                                        //     }

                                        //     async inserir(pessoa) {
                                        //         try {
                                        //             let connection = await this.conectar();
                                        //             let sql = `INSERT INTO pessoas VALUES (DEFAULT, ?, ?, ?)`;

                                        //             console.log(sql);
                                        //             const [results, fields] = await connection.query(sql, [
                                        //                 pessoa.nome,
                                        //                 pessoa.ano, 
                                        //                 pessoa.senha
                                        //             ]);
                                        //             pessoa.id = results.insertId;
                                        //         } catch (err) {
                                        //             console.log(err);
                                        //             throw err;
                                        //         }
                                        //     }
    
//     alterar(id, p) {
//     }

//     apagar(id) {
//     }

//     async ver(id) {
//         try {
//             let connection = await this.conectar();
//             const [results, fields] = await connection.query(
//                 'SELECT * FROM `pessoas` WHERE id=?',
//                 [id]
//             );
    
//             return results[0];
//         } catch (err) {
//             console.log(err);
//             throw err;
//         }
//     }
    
//     procurarPorNome(nome) {
//         return ;
//     }
// }

// module.exports = PessoasMysqlStore;