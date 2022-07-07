import mongoose from "mongoose";

const ToySchema = mongoose.Schema({
    Name: String,
    Information: String,
})

const Toys = mongoose.model("toys", ToySchema)

export default Toys