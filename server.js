require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Databaseeeee'))

app.use(express.json())

const usersRouter = require('./routes/users') // Mettre à jour l'importation pour utiliser le routeur des utilisateurs
app.use('/users', usersRouter) // Utiliser le routeur pour les routes des utilisateurs au lieu des abonnés

app.listen(3004, () => console.log('Server Starteed'))
