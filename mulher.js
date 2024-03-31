const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher (request, response) {
    response.json({
        nome: "Marília Bortolotto",
        minibio:"adevogada"
    })
}

function mostraPorta() {
    console.log("Servidor criado", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)