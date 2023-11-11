const express = require('express')
const logger = require('morgan')
const app = express() 
const cors = require ('cors')

// permite el envio de objetos a traves de las rutas
app.use(express.json())
app.use(logger('dev'))
app.use(cors())

const {connect} = require('./db/connect')


const tripRouter = require ('./routers/trip')
const usersRouter = require('./routers/users')
const apiRouter = require ('./routers/api')




app.use('/v1', tripRouter )
app.use('/v2', usersRouter )
app.use('/v3', apiRouter )


connect()

module.exports = app