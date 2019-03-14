const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')

const db = "mongodb+srv://pranit-kalbande:passwordpranit@cluster0-j1xel.mongodb.net/test?retryWrites=true"

mongoose.connect(db, err => {
    if (err) {
        console.error('Error' + err)
    } else {
        console.log('Connected to mongodb')
    }
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

router.get('/', (req, res) => {
    res.send('From API route')
})



router.post('/signUp', (req, res) => {
    let userData = req.body;
    let user = new User(userData)
    user.save((error, signedupUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: signedupUser._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({ token })
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid user')
            } else if (user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                let payload = { subject: user._id }
                let token = jwt.sign(payload, 'secretkey')
                res.status(200).send({ token })
                // res.status(200).send(user)
            }
        }
    })
})

module.exports = router