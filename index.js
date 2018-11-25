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

server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    db('users').where({ id }).first()
        .then(user => {
            if (user) {
                db('posts')
                    .where({ user_id: id })
                    .then(posts => {
                        user.posts = posts;
                        res.status(200).json(user);
                    })
                    .catch(err => res.status(500).json(err))
            }
        })
        .catch(err => res.status(500).json(err));
});

server.get('/api/posts/:id', (req, res) => {
    const id = req.params.id;
    db('posts').where({ id }).first()
        .then(post => {
            if (post) {
                db('comments')
                    .where({ post_id: id })
                    .then(comments => {
                        post.comments = comments;
                        res.status(200).json(post);
                    })
                    .catch(err => res.status(500).json(err))
            }
        })
        .catch(err => res.status(500).json(err));
});

const port = 8000;
server.listen(port, () => console.log(`running on port: ${port}`))