const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile')

const db = knex(knexConfig.development)
const server = express()

server.use(express.json())

server.get('/api/users', (req, res) => {
    db('users')
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

const port = 8000;
server.listen(port, () => console.log(`running on port: ${port}`))