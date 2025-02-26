// import mysql from 'mysql2/promise';
const mysql = require('mysql2/promise')
const express = require('express');

const IndexController = require('./controllers/IndexController');
const PessoaController = require('./controllers/PessoaController');
const PessoasStore = require('./lib/PessoasStore');
const UsuarioController = require('./controllers/UsuarioController');
const UsuarioStore = require('./lib/UsuarioStore');
const UsuariosStoreDb = require('./lib/UsuariosStoreDb');
const LoginController = require('./controllers/LoginController');
const LoginStore = require('./lib/LoginStore');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nsremedios',
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
const usuariosStoreDb = new UsuariosStoreDb();
const loginStore = new LoginStore();

const indexController = new IndexController();
const pessoaController = new PessoaController(pessoasStore);
const usuarioController = new UsuarioController(usuarioStore);
const loginController = new LoginController(loginStore);


app.get('/', (req, res) => {
    indexController.index(req, res);
});


// Login de Usuários

// app.get('/login', (req, res) => {
//     res.send(req.query);
// })
app.get('/login', (req, res) => {
    loginController.consulta(req, res);
});


// Cadastro de Usuários

app.get('/usuarios', (req, res) => {
    let usuarios = usuarioStore.listar();
    res.render('usuarios',{usuarios});
});

// app.get('/api/usuarios', (req, res) => {
//     usuarioController.listar(req, res);
// })
app.get('/api/usuarios/:id', (req, res) => {
    usuarioController.ver(req, res);
})
app.post('/api/usuarios', (req, res) => {
    usuarioController.inserir(req, res);
})
app.put('/api/usuarios/:id', (req, res) => {
    usuarioController.alterar(req, res);
})
app.delete('/api/usuarios/:id', (req, res) => {
    usuarioController.apagar(req, res);
})


// EXEMPLO 

app.get('/idade', (req, res) => {
    res.send(req.query);
});
app.post('/idade', (req, res) => {
    pessoaController.idade(req, res);
});


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



// app.post('/login', (req, res) => {
//     loginController.inserir(req, res);
// });




// app.get('/', (req, res) => {
//     res.render('');
// });

app.get('/confissoes', (req, res) => {
    res.render('confissoes');
});

app.get('/oracoes', (req, res) => {
    res.render('oracoes');
});

app.get('/liturgiaDiaria', (req, res) => {
    res.render('liturgiaDiaria');
});

app.get('/catequesePermante', (req, res) => {
        res.render('catequesePermante');
});

// app.get('/pedidosOracao', (req, res) => {
//     res.render('pedidosOracao');
// });
app.get('/areaRestrita', (req, res) => {
    res.render('areaRestrita');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/paroquia', (req, res) => {
    res.render('paroquia');
});

app.get('/noticias', (req, res) => {
    res.render('noticias');
});

app.get('/pastorais', (req, res) => {
    res.render('pastorais');
});

app.get('/movimentos', (req, res) => {
    res.render('movimentos');
});

app.get('/secretaria', (req, res) => {
    res.render('secretaria');
});

app.get('/contatos', (req, res) => {
    res.render('contatos');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
})

app.get('/desenvolvimento', (req, res) => {
    res.render('desenvolvimento');
})

app.get('/administracao', (req, res) => {
    res.render('administracao');
});

app.get('/publicacoes', (req, res) => {
    res.render('publicacoes');
});


// Auxiliar login
// app.get('/login', (req, res) => {
//     res.send(req.query);
// })
// app.get('/login', (req, res) => {
//     loginController.consulta(req, res);
// });

// app.post('/login', (req, res) => {
//     loginController.inserir(req, res);
// });

// app.get('/pessoas', (req, res) => {
//     pessoaController.listar(req, res);
// })
// app.get('/pessoas/:id', (req, res) => {
//     pessoaController.ver(req, res);
// })
// app.post('/pessoas', (req, res) => {
//     pessoaController.inserir(req, res);
// })
// app.put('/pessoas/:id', (req, res) => {
//     pessoaController.alterar(req, res);
// })
// app.delete('/pessoas/:id', (req, res) => {
//     pessoaController.apagar(req, res);
// })

app.get('*', function naoEncontrado(request, response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Não encontrado!\n')
    response.end();
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

