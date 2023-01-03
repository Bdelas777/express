const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan('dev'))

app.get('/products',(req,res) =>{
    res.send("Obteniendo productos")
})

app.post('/products',(req,res) =>{
    res.send("Obteniendo productos")
})

app.get('/products',(req,res) =>{
    res.send("Creando productos")
})

app.put('/products',(req,res) =>{
    res.send("Actualizando productos")
})

app.delete('/products',(req,res) =>{
    res.send("Eliminado productos")
})

app.delete('/products/:id',(req,res) =>{
    res.send("Un producto")
})
app.listen(3000)

console.log('Server on port ${3000}')