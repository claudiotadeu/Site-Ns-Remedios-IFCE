class Usuario {
    nome;
    username;
    senha; 
    permissao;
    
    constructor(nome,username,senha,permissao) {
        this.nome=nome;
        this.username=username;
        this.senha=senha; 
        this.permissao=permissao;
    }

    // getIdade() {
    //     return 2024 - this.ano;
    // }

    // getSaldo() {
    //     return 1000 + this.doacao;
    // }
}

module.exports = Usuario;