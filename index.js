const express = require('express')
const banco = require ('./banco')
const port = 3001

var server = express();

server.get('/', function (request, response) {
    response.send('Olá, mundo!');
});

server.get('/nome', function (request, response) {
    response.send('Meu nome é Leticia');
});

server.post('/nome', function (request, response) {
    response.send('Seu nome é Leticia');
});

server.get('/cliente', function (request, response) {
    banco.listarCliente().then((d)=>{
        response.send(d);
    });
});

server.post('/cliente', function (request, response) {
    response.send('Seu nome é Leticia');
});

server.listen(port, function () {
    console.log("rodando na porta" + port)
})