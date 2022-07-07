import express from "express";
import Toys from '../models/Toys.js'

const router = express.Router()

router.post('', (req, res) => {

    const newToy = new Toys({
        Name: req.body.name,
        Information: req.body.information
    })
    newToy.save((error) => {
        if (error) console.log("Error")
        else
            console.log("Saved")
    })

    res.redirect("http://localhost:3000/home") 
})

export default router