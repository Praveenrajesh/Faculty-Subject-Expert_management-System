import mongoose from "mongoose";
 
const Department = mongoose.Schema({
    did:{
        type: String,
        required: true
    },
    dabb:{
        type: String,
        required: true
    },
    dname:{
        type: String,
        required: true
    }
    
    

});
 
export default mongoose.model('Departments', Department);