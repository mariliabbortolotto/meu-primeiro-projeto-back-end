const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Marília Bortolotto",
        imagem: "não tem",
        minibio: "adevogada pilantra"
    },
    {
        nome: "Iana Chan",
        imagem: "não tem",
        minibio: "fundadora da Programarias"
    },
    {
        nome: "Fulana",
        imagem: "ciclana"
    }
]

function mostraMulheres(request, response) {
response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)