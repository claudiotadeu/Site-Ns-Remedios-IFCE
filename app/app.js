// import mysql from 'mysql2/promise';
const mysql = require('mysql2/promise')
const express = require('express');

const IndexController = require('./controllers/IndexController');
const PessoaController = require('./controllers/PessoaController');
const PessoasStore = require('./lib/PessoasStore');
const UsuarioController = require('./controllers/UsuarioController');
const UsuarioStore = require('./lib/UsuarioStore');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});


const pessoasStore = new PessoasStore();
const usuarioStore = new UsuarioStore();

const indexController = new IndexController();
const pessoaController = new PessoaController(pessoasStore);
const usuarioController = new UsuarioController(usuarioStore);


app.get('/', (req, res) => {
    indexController.index(req, res);
});

app.get('/idade', (req, res) => {
    res.send(req.query);
});
app.post('/idade', (req, res) => {
    pessoaController.idade(req, res);
});

// Auxiliar login
app.get('/login', (req, res) => {
    res.send(req.query);
})
app.post('/login', (req, res) => {
    usuarioController.login(req, res);
});

app.get('/sobre', () => {
    res.render();
})


app.get('/pessoas', (req, res) => {
    pessoaController.listar(req, res);
})
app.get('/pessoas/:id', (req, res) => {
    pessoaController.ver(req, res);
})
app.post('/pessoas', (req, res) => {
    pessoaController.inserir(req, res);
})
app.put('/pessoas/:id', (req, res) => {
    pessoaController.alterar(req, res);
})
app.delete('/pessoas/:id', (req, res) => {
    pessoaController.apagar(req, res);
})

app.get('*', function naoEncontrado(request, response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Não encontrado!\n')
    response.end();
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

