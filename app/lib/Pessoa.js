class Pessoa {
    nome;
    ano;
    doacao;    
    
    constructor(nome, ano, doacao) {
        this.nome = nome;
        this.ano = ano;
        this.doacao = doacao;
    }

    getIdade() {
        return 2024 - this.ano;
    }

    getSaldo() {
        return 1000 + this.doacao;
    }
}

module.exports = Pessoa;