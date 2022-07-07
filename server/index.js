import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import addRoutes from './routes/add.js'
import fetchRoutes from './routes/fetch.js'
import editRoutes from './routes/edit.js'
import authRoutes from './routes/auth.js'
import Users from './models/User.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.text())


app.get('', (req, res) => {
    res.send("Welcome to Toy Directory")
})

app.post('/login', async (req, res) => {

    const docs = await Users.find({ Id: req.body.id, Password: req.body.password })
    console.log(docs)
    if (!docs.length == 0) {
        res.redirect("http://localhost:3000/home")
    }
    else {
        res.send("Wrong id or password") 
    }
})

app.use('/add', addRoutes)
app.use('/fetch', fetchRoutes)
app.use('/edit', editRoutes)
app.use('/register', authRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("RUNNING"))

const CONNECTION_URL = ""
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Connected to Atlas"))
    .catch(err => console.log(err.message))