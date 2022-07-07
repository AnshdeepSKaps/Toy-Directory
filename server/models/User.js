import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    Id: String,
    Password: String
})

const Users = mongoose.model('users', UserSchema)

export default Users