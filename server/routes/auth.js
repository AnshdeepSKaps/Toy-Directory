import express from "express";
import Users from "../models/User.js";

const router = express.Router()

router.post('', (req, res) => {

    const data = req.body
    if(data.password == data.confirm){
        const doc = new Users({
            Id: data.id,
            Password: data.password
        })

        doc.save((error) => {
            if (error) console.log("Error")
            else
                console.log("Saved")
        })
        res.redirect("http://localhost:3000/login")
    }
    else
    res.send("Passwords not matching")
})

export default router

