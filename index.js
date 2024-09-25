const app = require('express')()
const port = 8080
const swaggerUi = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml');


const games = [
    {id:1, name: "Witcher 3", price: 29.99},
    {id:2, name: "Cyberpunk", price: 39.99},
    {id:3, name: "Dota 2", price: 0},
    {id:4, name: "Minecraft", price: 19.99},
    {id:5, name: "CS:GO", price: 0},
    {id:6, name: "Roblox", price: 10},
    {id:7, name: "GTA V", price: 49.99},
    {id:8, name: "DEADLOCK", price: 0},

]


app.get('/games', (req,res) => {
    res.send(games)
})
app.get('/games/:id', (req,res) => {
    if (typeof games[req.params.id - 1] === 'undefined'){
        return res.status(404).send({error: "Game not found"})
    }
    res.send(games[req.params.id -1])
})
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`)
})