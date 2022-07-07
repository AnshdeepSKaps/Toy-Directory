import express from "express";
import Toys from "../models/Toys.js";
import mongoose from "mongoose";

const router = express.Router()

router.post('', async (req, res) => {

    await Toys.updateOne({ _id: mongoose.Types.ObjectId(req.body.id) }, {
        $set: {
            Name: req.body.newName,
            Information: req.body.newInfo
        }
    })

    res.redirect("http://localhost:3000/home")
})

router.post('/delete', (req, res) => {

    const id = req.body.substring(1, req.body.length - 1)

    Toys.deleteOne({ _id: id }).then(() => {
        res.send("Ok")
    })

})

export default router 