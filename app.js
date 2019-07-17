const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const student = require('./model')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World Students API')
})


app.get('/students', async (req, res) => {
    try {
        const results = await student.all()
        res.send(results)
    } catch (error) {

    }
})

app.get('/student/:id', async (req, res) => {
    try {
        const id = req.params.id
        const results = await student.one(id)
        res.send(results)
    } catch (error) {

    }
})

app.post('/student/add', async (req, res) => {
    try {
        const { name,faculty } = req.body
        const user = { name,faculty}
        const results = await student.add(user)
        res.send(results)
    } catch (error) {

    }
})

app.get('/student/delete/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const results = await student.delete(id)
        res.send(results)
    } catch (error) {

    }
})


app.listen(3000, console.log('Start API Port 3000'))