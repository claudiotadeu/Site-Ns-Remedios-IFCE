class Usuario {
    nome;
    username;
    senha; 
    permissao;
    static SALT_ROUNDS = 10;
    saltRounds

    constructor(nome,username,senha,permissao) {
        this.nome=nome;
        this.username=username;
        this.senha=senha; 
        this.permissao=permissao;
    }

    set senha(senha) {
        console.log({senha});
        if (!senha) {
            throw new Error('Senha não pode ser vazia!');
        }
        this._senha = bcrypt.hashSync(senha, Pessoa.SALT_ROUNDS);
    }

    get senha() {
        return this._senha;
    }

    compararSenha(senha) {
        return bcrypt.compareSync(senha, this.senha);
    }


    // getIdade() {
    //     return 2024 - this.ano;
    // }

    // getSaldo() {
    //     return 1000 + this.doacao;
    // }
}

module.exports = Usuario;