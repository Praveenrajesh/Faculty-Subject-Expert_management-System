import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : {
        type: String,
        required :true,
        unique : true,
    },
    password : String,
    repassword : String
    
})
export default mongoose.model('Login',userSchema);
