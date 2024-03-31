const express = require("express")
const router=express.Router()
const app = express()

const porta = 3333

function mostraHora(request,responde) {
    const data = newDate("hj")
    const hora = data.toLocaleTimeString('pt-BR')
    responde.send(hora)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)