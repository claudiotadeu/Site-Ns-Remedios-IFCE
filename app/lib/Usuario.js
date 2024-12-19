class Usuario {
    login;
    senha;
    // doacao;    
    
    constructor(login, senha) {
        this.login = login;
        this.senha = senha;
        // this.doacao = doacao;
    }

    // getIdade() {
    //     return 2024 - this.ano;
    // }

    // getSaldo() {
    //     return 1000 + this.doacao;
    // }
}

module.exports = Usuario;