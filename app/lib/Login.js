class Login {
    username;
    senha;

    constructor(username, senha){
        this.username=username;
        this.senha=senha;
    }
    
    getUsuario(){
        let username=this.username;
        return username;
    }

    getSenha(){
        let senha=this.senha;
        return senha;
    }
    // nome;
    // ano;
    // doacao;    
    
    // constructor(nome, ano, doacao) {
    //     this.nome = nome;
    //     this.ano = ano;
    //     this.doacao = doacao;
    // }

    // getIdade() {
    //     return 2024 - this.ano;
    // }

    // getSaldo() {
    //     return 1000 + this.doacao;
    // }
}

module.exports = Login;