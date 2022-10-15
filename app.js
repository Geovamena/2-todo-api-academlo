const  express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK!'})
})

const datame = [{
    nombre: 'Geovanni',
    edad: 18,
    pais: 'Ecuador'
}]

const datametas1 = [{
    hobbies: ['mobies', 'read', 'programing']
}]

const datametas2 = [{
    crecimiento:['python', 'realciones humanas']
}]

const databussines = [{
    empresas:['amazon', 'meta', 'google']
}]

app.get('/me', (request, response) => {
    response.status(200).json(datame)
})

app.post('/metas', (request, response) => {
    response.status(200).json(datametas1)
})

app.patch('/metas', (request, response) => {
    response.status(200).json(datametas2)
})

app.put('/bussines', (request, response) => {
    response.status(200).json(databussines)
})

app.listen(8000, () => {
    console.log('server started at port 8000')
}) 
