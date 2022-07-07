import express from 'express'
import Toys from '../models/Toys.js'

const router = express.Router()

router.get('', async (req, res) => {

    const data = await Toys.find().exec()
    res.json(data)
})

router.post('/search', async (req, res) => {

    const searchString = req.body

    const docs = await Toys.find({ Name: { $regex: new RegExp(searchString, "i") } })
    res.json(docs)
})

export default router